# COMPSCI-4ZP6A-Capstone-Project-2024
<span style="font-size:20px">**Below is a board of helpful information and commands that may aid our development process...**</span>


### Useful Links:
- [JIRA SCRUM Board](https://parkitplace.atlassian.net/jira/software/projects/SCRUM/boards/1)
- [Firebase Web Console](https://console.firebase.google.com/u/1/project/parkitplace-3dce5/overview)
- [SRS Document](https://github.com/wu103-mcmaster/Parkit-Place-Capstone/blob/master/docs/Capstone%20SRS.pdf)
- [Project Planning Document](https://github.com/wu103-mcmaster/Parkit-Place-Capstone/blob/master/docs/Capstone%20Project%20Planning.pdf)

### Rough Idea of Project Architecture
![Project UML](docs/UML.png)


### Initializing Packages
in repsepctive folder example: /backend run:
```
npm i
npm -g install firebase-tools
```

### Firebase Commands
starting basics for FireBase
```
firebase login
firebase emulators:start
```

### Main -> Master branch name change commands
```
git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin --a
```

# Create & Merge GitHub Branch with JIRA

Follow these steps to create a new branch for your assigned JIRA ticket and merge your changes effectively.

## Steps

1. **Create a New Branch**
   In your assigned JIRA ticket, navigate to the **Development** tab and create a new branch based on the ticket.

2. **Update Your Local Repository** 
   Open your code workspace and run the following command to retrieve your newly created branch:
   ```
   git pull --r
   ```
3. **Checkout the New Branch**
   Switch to your newly created branch using the command: 
   ```
   git checkout -b branch-name origin/branch-name
   ```
   To figure out the correct branch name, you can list all the branches:
   ```
   git branch -a
   ```
4. **Update Your Local Repository** 
   Open your code workspace and run the following command to retrieve your newly created branch:
   ```
   git commit -m "JRA-123 <summary of commit>"
   ```
5. **Push Changes to the Remote Branch**
  After making your changes, push them to the remote branch with:
  ```
  git push <remote> <branch-name>
  ```
6. **Create a Pull Request**
   Return to your JIRA ticket, go to the Development tab, and click on Create Pull Request to initiate the merge process.

```
