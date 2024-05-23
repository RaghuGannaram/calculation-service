### setup docker container

```bash
docker network create calculation-microservices-network

docker image build --tag raghugannaram/calculation-service:1.0.0 ./

docker container run \
> --detach \
> --name calculation-service \
> --publish 9000:9000 \
> --network calculation-microservices-network \
> --env LOG_LEVEL=debug \
> raghugannaram/calculation-service:1.0.0

```

