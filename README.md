
As part of my day 7 project, I designed and configured a secure Virtual Private Cloud (VPC) on Amazon Web Services (AWS) platform. The objective was to create a secure infrastructure by setting up public and private subnets, implementing network security measures, provisioning EC2 instances, configuring networking and routing components, and enforcing access control using SSH key pairs and IAM policies.
Key Tasks:


 # Design and with custom IP ranges to isolate the network.

![](https://github.com/urstrulybutch/MY-AWS-CLOUD-PROJECTS/blob/main/application%20Diagram%20.png) 
    
   I was able to Set up public and private subnets within the VPC to segregate resources.
    
   Configured route tables to control the flow of traffic between subnets.
 

  # Network Security:
    I Set up Network Access Control Lists (ACLs) to control inbound and outbound traffic at the subnet level.
   I  Configured security groups for EC2 instances to allow specific ports and protocols, ensuring secure communication.
 

# Provision EC2 Instances:
    I Launched an EC2 instances in both the public and private subnets to host applications and services.
     Configured security groups for the instances, allowing only necessary traffic while blocking unauthorized access.
    Created and assigned IAM roles to the instances, granting appropriate permissions for accessing AWS resources.
 

# Networking and Routing:
     I Set up an internet gateway to enable internet access for instances in the public subnet.
     I Configured a NAT gateway or NAT instance to provide outbound internet access for instances in the private subnet.
    I Created and associated route tables with the subnets to ensure proper routing of network traffic.
 
  
# SSH Key Pair and Access Control:
     i Generated an SSH key pair and securely stored the private key.
    I  Configured the EC2 instances to allow SSH access only with the generated key pair, enhancing security.
     I mplemented IAM policies and roles to control access and permissions to AWS resources, enforcing least privilege principles.
 
  # Test and Validate the Setup:
      SSHed into the EC2 instances using the private key and verified connectivity, ensuring successful access.
     Tested network connectivity between instances in different subnets, validating proper networking configurations.
     Verified security group rules and network ACL settings to ensure that only allowed traffic was permitted.
