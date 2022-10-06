#Monolitic Server for troop-admin
###HOST
http://138.68.234.110:32641/
###Development
Run development container with: (for any other mode just edit the NODE_ENV variable) <br />
`docker run --name troop-admin -e NODE_ENV=development -p 4000:4000 --rm -it troop-admin`

### Last version deployed: 0.1.15

###Deployment

1. build the image:<br />
   `docker build -t troop-admin .`
2. run the image in demon mode:<br />
   `docker run -d --name troop-admin -p 3100:3000 --rm -it troop-admin`
3. get the container id:<br />
   `docker container ls`
4. commit the container: (change the version as it grows)<br />
   `docker container commit troop-admin troop-admin:v0.1.15`
5. tag the container: <br />
   `docker image tag troop-admin:v0.1.15 registry.digitalocean.com/bluepixel/troop-admin:v0.1.15`
6. push the container to the registry: <br />
   `docker image push registry.digitalocean.com/bluepixel/troop-admin:v0.1.15`
7. create the deploy:<br /> (get the image sha from digitalocean registry)
   `kubectl create deployment troop-admin --image=<YOUR_IMAGE_SHA> --dry-run=client -o yaml > deploy.yaml`
8. deploy:
   `kubectl apply -f deploy.yaml`
9. expose a service to externally access to the application:<br /> (the port should be the containerPort)
   `kubectl expose deployment/troop-admin --type="NodePort" --port 3000`
10. be happy and access to your deployed application: <br />
    `curl <NODE_IP>:<NodePort>`

###Auxiliary documentation

1. https://www.digitalocean.com/community/tech_talks/how-to-deploy-your-application-or-microservice-as-a-kubernetes-deployment
2. https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-kubernetes
3. https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/
4. (for docker-compose apps) https://kubernetes.io/docs/tasks/configure-pod-container/translate-compose-kubernetes/

docker run -d --network bluepixel --name sandbox -p 3100:3000 --rm -it troop-admin
