# MY-AWS-CLOUD-PROJECTS

# Day 1: Introduction to AWS
I will explain the concepts of private and public cloud, outline the reasons why companies are migrating to the public cloud, and discuss the benefits associated with cloud adoption. Additionally, I will provide an overview of key AWS services and their relevance to DevOps practices. Finally, I will offer guidance on setting up an AWS account and navigating the AWS Management Console.

# Day 2: IAM (Identity and Access Management)
I explored IAM, which is used for managing access to AWS resources. how to create IAM users, groups, and roles, and how to apply permissions and security best practices to ensure proper access control.

# Day 3: EC2 Instances
I dived into EC2, which provides virtual servers in the cloud. I learnt how to launch EC2 instances, connect to them using SSH, and understand key concepts such as instance types, security groups, and key pairs.
My First AWS Project: Deployed a simple web application(such as jenkins) on the ec2 instance and access the application from outside AWS.

# Day 4: AWS Networking (VPC)
I explored AWS networking concepts, with a specific focus on VPC (Virtual Private Cloud).  learnt how to create and configure VPCs, subnets, and route tables, enabling you to design and manage the network infrastructure for your applications.

# Day 5: AWS Security
This day emphasizes security best practices in AWS. How to implement security measures such as security groups, network ACLs (Access Control Lists), and IAM policies to ensure the confidentiality, integrity, and availability of your AWS resources.

Day 6: AWS Route 53
Project: Configure and manage a domain name using Route 53. I registered a domain, set up DNS records, and explored advanced features such as health checks, routing policies, and DNS-based failover.

# Day 7: Secure VPC Setup with EC2 Instances
Project:
* Design and configure a VPC: Create a VPC with custom IP ranges. Set up public and private subnets. Configure route tables and associate subnets.
* Implement network security: Set up network access control lists (ACLs) to control inbound and outbound traffic. Configure security groups for EC2 instances to allow specific ports and protocols.
* Provision EC2 instances: Launch EC2 instances in both the public and private subnets. Configure security groups for the instances to allow necessary traffic. Create and assign IAM roles to the instances with appropriate permissions.
* Networking and routing: Set up an internet gateway to allow internet access for instances in the public subnet. Configure NAT gateway or NAT instance to enable outbound internet access for instances in the private subnet. Create appropriate route tables and associate them with the subnets.
* SSH key pair and access control: Generate an SSH key pair and securely store the private key. Configure the instances to allow SSH access only with the generated key pair. Implement IAM policies and roles to control access and permissions to AWS resources.
* Test and validate the setup: SSH into the EC2 instances using the private key and verify connectivity. Test network connectivity between instances in different subnets. Validate security group rules and network ACL settings.
By implementing this project, you'll gain hands-on experience in setting up a secure VPC with EC2 instances, implementing networking and routing, configuring security groups and IAM roles, and ensuring proper access control. This project will provide a practical understanding of how these AWS services work together to create a secure and scalable infrastructure for your applications.

# Day 8: Amazon S3
This day focuses on Amazon S3, a scalable object storage service. How to create S3 buckets, upload and download objects, and organize data using S3 features like versioning, lifecycle policies, and access control.

# Day 9: AWS CloudFormation
This day introduces Infrastructure as Code (IaC) using AWS CloudFormation. How to create CloudFormation templates to automate the provisioning of resources, manage stacks, and ensure consistent infrastructure across deployments.
Project: I worked on creating a CloudFormation template that provisions a fully configured application stack, including EC2 instances, networking components, and security groups.

# Day 10: AWS Elastic Beanstalk
Explored AWS Elastic Beanstalk, a fully managed service for deploying and scaling applications. You'll learn how to deploy applications using Elastic Beanstalk, configure environments, and manage deployments effortlessly.
Project: You'll deploy a sample application with a custom environment and configuration using Elastic Beanstalk.

# Day 11: AWS CodeCommit
This day focuses on AWS CodeCommit, a managed source control service. How to set up a Git repository in CodeCommit, collaborate with team members, and manage version control of your codebase.
Project: configured a CodeCommit repository for a team project, including setting up access control and collaboration workflows.

# Day 12: AWS CodePipeline
Dived into AWS CodePipeline, a fully managed continuous delivery service. How to build end-to-end CI/CD pipelines by configuring source, build, and deployment stages, automating the entire software release process.
Project: created a CI/CD pipeline using CodePipeline for an application deployment, including source code integration, build, and automatic deployment to a target environment.

# Day 13: AWS CodeBuild
This day focuses on AWS CodeBuild, a fully managed build service. How to configure build projects in CodeBuild, define build specifications, and perform build and testing processes.
Project: You'll configure and run CodeBuild for a project, including defining build specifications and integrating with other AWS services.

# Day 14: AWS CodeDeploy
explored AWS CodeDeploy, a service for automating application deployments to various compute environments. How to create deployment groups, configure deployment strategies, and perform automatic rollbacks if necessary.
Project: Implemented a Blue/Green deployment strategy for a sample application using CodeDeploy, ensuring zero-downtime deployments and easy rollback options.

# Day 15: AWS CloudWatch
This day focuses on monitoring AWS resources using AWS CloudWatch. You'll learn how to create alarms, set up notifications, and collect metrics to gain insights into the health and performance of your applications and infrastructure.
Project: You'll set up CloudWatch alarms for critical metrics of an application, define appropriate threshold conditions, and configure notification actions.

# Day 16: AWS Lambda
This day introduces serverless computing with AWS Lambda. You'll learn how to create and deploy serverless functions, trigger them based on events, and leverage Lambda to build scalable and event-driven architectures.

# Day 17: AWS CloudWatch Events and EventBridge
This day focuses on AWS CloudWatch Events and EventBridge, services for event-driven architectures. How to create event rules, configure event targets, and build serverless event-driven workflows.
Project: Buit a serverless event-driven workflow using CloudWatch Events and EventBridge, demonstrating the integration and automation of different AWS services based on events.

# Day 18: AWS CloudTrail and Config
Explored AWS CloudTrail and AWS Config, which provide auditing and compliance capabilities. How to track API calls using CloudTrail and ensure compliance with AWS Config rules.
Project: You'll configure CloudTrail to log API activities and set up AWS Config rules to enforce compliance policies for your AWS resources.

# Day 19: AWS DynamoDB
Explore AWS DynamoDB, a NoSQL database service.How to create and manage DynamoDB tables, perform CRUD operations, and leverage DynamoDB's scalability and performance capabilities.
Project: You'll build a serverless API using DynamoDB as the backend storage, allowing data retrieval and modification operations.

# Day 20: AWS ECS (Elastic Container Service)
This day focuses on AWS ECS, a fully managed container orchestration service. How to run and manage containers using ECS, including creating task definitions, managing services, and scaling with auto-scaling capabilities.
Project: Deployed a multi-container application using ECS, configure auto-scaling policies, and ensure high availability and efficient resource utilization.

# Day 21: AWS ECR (Elastic Container Registry)
Explored AWS ECR, a fully managed container registry for storing and managing container images.How to push and pull Docker images to and from ECR, enabling seamless integration with ECS and other container services.
Project: Built a CI/CD pipeline that automatically builds, pushes, and deploys Docker images to ECR, ensuring streamlined container image management.

# Day 22: AWS EKS (Elastic Kubernetes Service)
This day introduces AWS EKS, a fully managed Kubernetes service. Deployed and managed Kubernetes clusters using EKS, including launching worker nodes, configuring networking, and deploying applications using Kubernetes manifests.
Project: Deployed a sample application on EKS using Kubernetes manifests, demonstrating the capabilities of running containerized applications on a managed Kubernetes service.

# Day 23: AWS CloudWatch Logs
Explored AWS CloudWatch Logs, a service for collecting and analyzing log data.How to configure log groups, streams, and filters to centralize log management and gain insights into application behavior and troubleshooting.
Project: You'll set up CloudWatch Logs for a production application, configure log groups and streams, and create filters to extract relevant log data.

# Day 24: AWS Secrets Manager
This day focuses on AWS Secrets Manager, a service for storing and managing secrets such as database credentials, API keys, and other sensitive information. How to store, retrieve, and rotate secrets securely in your applications.
Project: Configured Secrets Manager to store and manage secrets, integrate secret retrieval in an application, and implement secret rotation policies.

# Day 25: AWS Auto Scaling
Dived into AWS Auto Scaling, a service for automatically adjusting the capacity of your AWS resources based on demand. How to configure Auto Scaling groups, scaling policies, and scaling based on metrics.
Project: Configured an Auto Scaling group for an application, define scaling policies based on metrics such as CPU utilization, and observe the dynamic scaling behavior.

# Day 26: AWS RDS (Relational Database Service)
This day introduces AWS RDS, a managed database service for relational databases. How to create and manage RDS instances, configure backups, snapshots, and replication to ensure high availability and data durability.
Project: provision an RDS instance, configure backups and snapshots, and test replication scenarios for a sample database.

# Day 27: AWS Elastic Load Balancer
Explored AWS Elastic Load Balancer, a service for distributing incoming application traffic across multiple targets. How to configure and manage load balancers to ensure high availability, fault tolerance, and scalability.
Project: Configured an Elastic Load Balancer for an application, define target groups, and observe the load balancing behavior across instances.

# Day 28: AWS Systems Manager
Explored AWS Systems Manager, a management service for AWS resources. How to use Systems Manager to manage EC2 instances, perform patch management, automate administrative tasks, and configure resource compliance.
Project: Leveraged Systems Manager to manage EC2 instances, perform common administrative tasks, and ensure compliance with configuration policies.

# Day 29: AWS Cloud Migration Strategies and Tools
This day focuses on learning how to migrate applications to AWS cloud. What are the most popular strategies and tools used to achieve the cloud migration.
