
# 다운받는법

1. git clone https://github.com/hsIN2205/portfolio.git
2. cd 다운받은폴더


# 실행하는법(npm기준)

1. npm install
2. npm start


# Git에 수정한거 올리기전에

1. git status (add 전후로 확인)
2. git add . (작업한거 추가하고)
3. git commit -m "작업내용"
4. git pull
5. 충돌 일어난거 있으면 수정
6. 제대로 실행되는지 확인
7. git push
  - 만약에 push 안되면 git push -u origin master


# 배포하는법

  (처음할 때) 
    1. npm install yarn
    2. npm install gh-pages

1. gh-pages -d build


# 할일

- eslint href 수정
  - a 태그 안쓰는걸로 바꾸거나 오류 메시지 없애기


[사이트URL](https://hsin2205.github.io/portfolio/)
