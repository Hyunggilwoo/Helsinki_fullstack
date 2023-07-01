Here is a simple flow chart:

```mermaid
    A[participant]--GET-->B[server https://studies.cs.helsinki.fi/exampleapp/notes];
    B -- Yes --> C[Do not deploy];
    B -- No --> D[Run deploy.sh to deploy!];
    C ----> E[Enjoy your weekend];
    D ----> E[Enjoy your weekend];
```
