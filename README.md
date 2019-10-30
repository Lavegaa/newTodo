# newTodo
Velopert님의 contextAPI와 hooks 활용 강의를 보며 TodoList를 만들었다.
# 빠른시작

## 클론

```
git clone https://github.com/Lavegaa/newTodo.git
```

## dependencies 설치

```
npm install
```

or

```
yarn
```

## 시작

```
npm start
```

or

```
yarn start
```

# Custom Context
## useTodoState
todo의 정보들이 들어있는 state인 todos를 불러오는 context.
## useTodoDispatch
reducer가 연결되어있는 context, action type으로는 CREATE, REMOVE, TOGGLE이 있다.
## useTodoNextId
todo의 id를 관리하기 위한 context, toggle이나 remove시에도 활용된다.
