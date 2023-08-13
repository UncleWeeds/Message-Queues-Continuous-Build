# Message-Queues-Continuous-Build

This Repo includes two tasks 

<b> 1. System Design </b>

Message Queues

Host a front end that has a button in it. On clicking, it should call a REST endpoint of a backend service. Create another backend service that keeps track of the number of clicks the users make and prints it. Both services should communicate via a message queue of your choice.

<b> 2. DevOps </b>

Continuous Build

Configure a continuous build pipeline that listens to the GitHub repo push, builds the image, and pushes it to the Docker hub. We recommend using Jenkins for this purpose but feel free to do your research.

<b>If you are interested in checking out the project, you can follow the instructions below:</b>

1.Navigate to the root directory of the repository you've copied.

2.Run the command docker-compose up to start the project.

3.Open your web browser and go to localhost:8080 to access the frontend page.

4.Try clicking the "Click Me" button as many times as you like. You can then view the count in your backend server logs, reflecting the number of times the button has been clicked
