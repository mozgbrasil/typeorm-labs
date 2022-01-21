[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png "MOZG"

![valid XHTML][checkmark]

# typeorm-labs 👉️

## Contribuição

Caso queira contribuir para melhoria da documentação de um Fork no repositório e envie um pull request ou edite no github

## Requerimentos

- https://www.docker.com/
- https://code.visualstudio.com/
- https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

## Executando local

```
git clone ☝️

cd <directory>

code --new-window .
```

## Dependências

```
npm i typeorm -g

  typeorm init --name typeorm-labs --database postgres

npm i typeorm-model-generator -g

  typeorm-model-generator -h localhost -d 'typeorm-labs' -p 5432 -u postgres -x postgres -e postgres
```

# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

![alt typeorm-uml](http://www.plantuml.com/plantuml/png/dLPjRzem4FwUNt5ZqWHIkxQRkWzL6fLsj4CRT69qRvg4dFW0YyH6jbFAIl_xR2SDWKB96ZvWtpttyjXtbvmfJQHEazZpNb4SCewWIHXZ7Jb9S0zeQFyRW5mpFOUQ7mPEun-4mH_k3mNNeDXVF3qwX4Z4GfwE99a7zTpEFx28eBRqFftWl7xNWFiXmvW-W77eEyEJZqHEhaHCaVS43Vmt1XZu1quNm9qDM3WPhZl9FBnkkkU9RM5d16d2DrcsBktFM2P86TcN60b9oowyCQC8IgD4eUTJL9aWGJqMDDz4J4OnUfuMKz02Gg6rI80ouqqpmJrFJHYV4aaIa2BbrCJWAE6u98zDcjOz26aSbnHgJAYOCJw28OaLbZHZmkbCCgsHvxgICeg9Kd3lWNdEIJGPkS0NbXNCnaoZqpIb5BDCg92C92BFBCmXe5nJF7Y6eQiHk54erRaG4xK7gLqFGhk11X2r8h09k9jtqW6Zq3Y1ThVVkchreD1Px5DTVcaGZJ6QY5GFAD5eCVrsf_Mjt-nyXH_j_gVhcxwJmE_hRgl-eL4sbQXJoIiRFXG4SsubLkjyjgPh-YLsqIu-DNlDYxxHVc_sVhMxL_MZmyELz4XgxbfMmqxJC6PgZFG5ny1Ko5UoNHBjuIt3cQ4giqL6zd5JWMu67KIctSsisCpbtV7nwhKGRGjwiyEN41rkAoFVl_mS10LYGn7cY8VLsixBkbJGLSx20ktustOAAuTWngc9vroTNrz_QJMxPQrfNps8nOZn_olS9gKIbKB3W3mkCnRBxQwcVCn1QTFtMwxq_MfrHlObKGLeNZiQdq4kcNJOoDQ9u8PAKgmpBgLzfOvCqCHDfkwisrS6KbPllR5oDdqpcuLCEgY9AKko1peJ399SaYNsH7fVpiFEzys1bY1h5HAr6wZCN4p8JfZBVoVgcJDOWcv9d6ODsVhPXxMMoJfcsJ1LBcR8fDBTAg5jErG2aX6kJxgQcoZHMpV1Qx1OxEylxg5MUatL2emJxi2K_0Y3oMVbHX-xz8i5r8g-D1zBPyYf_IRx1m00 "mouseover typeorm-uml")

<img src="http://www.plantuml.com/plantuml/png/dLPjRzem4FwUNt5ZqWHIkxQRkWzL6fLsj4CRT69qRvg4dFW0YyH6jbFAIl_xR2SDWKB96ZvWtpttyjXtbvmfJQHEazZpNb4SCewWIHXZ7Jb9S0zeQFyRW5mpFOUQ7mPEun-4mH_k3mNNeDXVF3qwX4Z4GfwE99a7zTpEFx28eBRqFftWl7xNWFiXmvW-W77eEyEJZqHEhaHCaVS43Vmt1XZu1quNm9qDM3WPhZl9FBnkkkU9RM5d16d2DrcsBktFM2P86TcN60b9oowyCQC8IgD4eUTJL9aWGJqMDDz4J4OnUfuMKz02Gg6rI80ouqqpmJrFJHYV4aaIa2BbrCJWAE6u98zDcjOz26aSbnHgJAYOCJw28OaLbZHZmkbCCgsHvxgICeg9Kd3lWNdEIJGPkS0NbXNCnaoZqpIb5BDCg92C92BFBCmXe5nJF7Y6eQiHk54erRaG4xK7gLqFGhk11X2r8h09k9jtqW6Zq3Y1ThVVkchreD1Px5DTVcaGZJ6QY5GFAD5eCVrsf_Mjt-nyXH_j_gVhcxwJmE_hRgl-eL4sbQXJoIiRFXG4SsubLkjyjgPh-YLsqIu-DNlDYxxHVc_sVhMxL_MZmyELz4XgxbfMmqxJC6PgZFG5ny1Ko5UoNHBjuIt3cQ4giqL6zd5JWMu67KIctSsisCpbtV7nwhKGRGjwiyEN41rkAoFVl_mS10LYGn7cY8VLsixBkbJGLSx20ktustOAAuTWngc9vroTNrz_QJMxPQrfNps8nOZn_olS9gKIbKB3W3mkCnRBxQwcVCn1QTFtMwxq_MfrHlObKGLeNZiQdq4kcNJOoDQ9u8PAKgmpBgLzfOvCqCHDfkwisrS6KbPllR5oDdqpcuLCEgY9AKko1peJ399SaYNsH7fVpiFEzys1bY1h5HAr6wZCN4p8JfZBVoVgcJDOWcv9d6ODsVhPXxMMoJfcsJ1LBcR8fDBTAg5jErG2aX6kJxgQcoZHMpV1Qx1OxEylxg5MUatL2emJxi2K_0Y3oMVbHX-xz8i5r8g-D1zBPyYf_IRx1m00" alt="typeorm-uml" style="height: 100px; width:100px;"/>
