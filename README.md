# Next.js 14+ Docker Tutorial - Programming with Umair

## Commands

<!-- This command is used to build a Docker image from the Dockerfile.dev file. The image is tagged as nextjs-docker-tutorial-dev:1.0 -->

docker build -f Dockerfile.dev -t nextjs-docker-tutorial-dev:1.0 .

<!-- This command is used to run the Docker image as a container. The -d flag is used to run the container in detached mode. The -p flag is used to map the host port 3000 to the container port 3000 -->

docker run -d -p 3000:3000 nextjs-docker-tutorial-dev:1.0

<!-- This command is used to find the process ID that is using port 3000 -->

netstat -ano | findstr :3000

<!-- This command is used to forcefully kill the process with ID 3416 -->

taskkill /PID 3416 /F

<!-- This command is used to build a Docker image from the Dockerfile.prod file. The image is tagged as nextjs-docker-tutorial-prod:1.0 -->

docker build -f Dockerfile.prod -t nextjs-docker-tutorial-prod:1.0 .

<!-- This command is used to run the Docker image as a container. The container is named 'aaa'. The -d flag is used to run the container in detached mode. The -p flag is used to map the host port 4000 to the container port 4000 -->

docker run --name aaa -d -p 4000:4000 nextjs-docker-tutorial-prod:1.0

<!-- This command is used to run the Docker image named 'docker-next' as a container. The -p flag is used to map the host port 3000 to the container port 3000. The -v flag is used to create two volumes, one for the node_modules directory and one for the current directory -->

docker run docker-next -p 3000:3000 -v /app/node_modules -v .:/app

<!-- This command is used to build a Docker image from the Dockerfile in the current directory. The image is tagged as 'hello-docker' -->

docker build -t hello-docker .

<!-- This command is used to list all Docker images -->

docker images

<!-- This command is used to run the Docker image named 'hello-docker' as a container -->

docker run hello-docker

<!-- This command is used to run the Docker image named 'hello-docker' as a container in interactive mode with a shell -->

docker run -it hello-docker sh

<!-- This command is used to build a Docker image from the Dockerfile in the current directory. The image is tagged as 'react-docker' -->

docker build -t react-docker .

<!-- This command is used to run the Docker image named 'react-docker' as a container -->

docker run react-docker

<!-- This command is used to run the Docker image named 'react-docker' as a container. The -p flag is used to map the host port 5173 to the container port 5173 -->

docker run -p 5173:5173 react-docker

<!-- This command is used to list all Docker containers, both running and stopped -->

docker ps -a

<!-- This command is used to remove all stopped Docker containers -->

docker container prune

<!-- This is a modification to the 'dev' script in the package.json file. The '--host' flag is added to the 'vite' command, which allows the server to be accessible from any IP address, not just localhost -->

"scripts": {
"dev": "vite --host"
}
