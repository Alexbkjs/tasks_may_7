# Merge changes from the parent branch (dev) into current branch (task_4),

#### 1. Ensure your working directory is clean:

Before incorporating changes from the parent branch, make sure your working directory is clean by committing or stashing any pending changes in your current branch.

#### 2. Switch to the parent branch (dev):

```sh
git checkout dev
```

#### 3. Pull latest changes from the remote repository:

```sh
git pull origin dev
```

#### 4. Switch back to your task branch (task_4):

```sh
git checkout task_4
```

#### 5. Merge changes from parent branch (dev) into your branch (task_4):

```sh
git merge dev
```

#### 6. Resolve any merge conflicts (if necessary):

```sh
git merge --continue
```

#### 8. Commit your changes:

```sh
git commit -m "merge changes from dev into task_4"
```

#### 9. Push the changes to the remote repository:

```sh
git push origin task_4
```
