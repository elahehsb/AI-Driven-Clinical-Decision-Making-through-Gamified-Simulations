
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import shap

# Load data
sensor_data = pd.read_csv('sensor_data.csv')
questionnaire_data = pd.read_csv('questionnaire_data.csv')
log_data = pd.read_csv('log_data.csv')

# Preprocess data
data = pd.merge(sensor_data, questionnaire_data, on='userId')
data = pd.merge(data, log_data, on='userId')

# Train-test split
X = data.drop(['userId', 'decision'], axis=1)
y = data['decision']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model training
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)
print(f'Accuracy: {accuracy_score(y_test, y_pred)}')

# Explainable AI
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

shap.summary_plot(shap_values, X_test, plot_type="bar")
