# hsa-siege

### Description and results
This repo runs siege tool for stress testing node.js app with postresql.

Our limits became critical on 2000 concurrent requests per second during 1 minute - availability only 0.18 %

### Installation and run
#### Install

1. clone repo

```bash
git clone git@github.com:andrpech/hsa-siege.git
```

2. run docker

#### Run

1. run docker-compose

```bash
docker-compose up --build
```

2. create db

```bash
docker-compose exec app npx prisma migrate dev --name init 
```

3. run siege

```bash
docker-compose exec siege siege -c2000 -t1M -f /siege/urls.txt --content-type "application/json" 2> /siege/results_2000.txt
```