# Habbo Hotel API Endpoints (Habbo.com.br)

Este arquivo documenta os endpoints da API pública do Habbo que utilizaremos no projeto One Habbo.

## Base URL

`https://www.habbo.com.br/api/public/`

## 1. Usuários (Profile)

**Endpoint:** `/users?name={username}`

- **Descrição:** Retorna informações básicas do usuário (ID, missão, data de registro).
- **Exemplo:** `https://www.habbo.com.br/api/public/users?name=RZSISTEMA`

## 2. Perfil Extendido

**Endpoint:** `/users/{uniqueId}/profile`

- **Descrição:** Retorna amigos, grupos e quartos do usuário.

## 3. Fotos & Criações

**Endpoint:** `/users/{uniqueId}/photos`

- **Descrição:** Lista fotos tiradas pelo usuário.

## 4. Notícias

**Endpoint:** `https://www.habbo.com.br/api/public/news` (Não oficial, geralmente via scraping ou feed RSS)
_Nota: A API de notícias pode variar, recomendável verificar feed RSS._

## 5. Grupos

**Endpoint:** `/groups/{groupId}`

- **Descrição:** Informações detalhadas do grupo, emblema e membros.

## 6. Conquistas

**Endpoint:** `/users/{uniqueId}/achievements`

- **Descrição:** Lista de conquistas desbloqueadas pelo usuário.

---

_Obs: Todos os dados obtidos devem respeitar a política de cache e uso de dados da Sulake._
