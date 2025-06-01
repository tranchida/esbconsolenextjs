#!/bin/bash

# Vérifier si minikube est en cours d'exécution
if ! minikube status | grep -q "Running"; then
    echo "Minikube n'est pas démarré. Démarrage en cours..."
    minikube start
    if [ $? -ne 0 ]; then
        echo "Erreur lors du démarrage de minikube"
        exit 1
    fi
    echo "Minikube a été démarré avec succès"
else
    echo "Minikube est déjà en cours d'exécution"
fi

# Configurer l'environnement Docker pour minikube
echo "Configuration de l'environnement Docker pour minikube..."
eval $(minikube docker-env)

echo "Configuration terminée. Vous pouvez maintenant construire vos images Docker localement." 