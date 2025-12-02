node-server is a basic node.js server with lots of automation

repo includes 3 section

  - terraform with digitalocean provider (2 droplets + loadbalancer)
  - ansible (basic server setup, nginx config, docker config)
  - docker and application

to be able to use the project, 
1. go to terraform folder
  - modify terraform.tfvars.example file according to your setup
  - run terraform plan + terraform apply

2. go to ansible folder
  - edit group_vars/app_servers.yml file with your private key directory
  - create vault/prod-secrets.yml with your apps env variable if needed
  - run following command: 

```bash
ansible -i inventory/production.ini playbooks/site.yml --ask-vault-pass
```
