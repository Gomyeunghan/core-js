/* global gsap */

import {
  tiger,
  delayP,
  getNode,
  changeColor,
  clearContents,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

const ENDPOINT = 'http://localhost:3000/users';

// 1. user 데이터 fetch 해주세요.
//    - tiger.get

// 2. fetch 데이터의 유저 이름만 콘솔 출력
//     - 데이터 유형 파악  ex) 객체,배열,숫자,문자
//     - 적당한 메서드 사용하기

// 3. 유저 이름 화면에 렌더링

const userCardInner = getNode('.user-card-inner');

// 유저카드 노드 가져오기

async function renderUserList() {
  // async 로 프로미스 객체로 값 가져오기
  //유저리스트 렌더링하는 함수

  // 로딩 스피너 렌더링
  renderSpinner(userCardInner);
  //값이 불러오기전에 로딩 페이지 보여주기

  // await delayP(2000);

  //try catch 로 에러 잡아주기
  try {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      },
    });
    // getNode('.loadingSpinner').remove()

    //tiger.get(ENDPOINT) 얻어온 데이터를 프라미스 객체로 반환해서 변수에 할당
    const response = await tiger.get(ENDPOINT);

    //프로미스객체의 response.data 에접근해 변수에 할당
    const data = response.data;

    //받아온 데이터가 배열 형식이라서 반복문 돌림
    //받아온데이터 user 를 renderUserCard 에 인자로 할당
    //받아온 데이터마다 card템플릿에 data 를 바인딩하고 반환해서 usercardIner 노드에 끝부분에 넣음
    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');
    //예쁜색 지정해주기

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
    //유저카드 렌더링된뒤에 예쁘게 나오게 하기
  } catch {
    console.error('에러가 발생했습니다!');
    renderEmptyCard(userCardInner);
  }
  // 에러가 발생하면 실행할 코드
  //빈 카드를 만들고 에러가 발생하면 해당 html을 유저카드 인너에 넣어줌
}

renderUserList();
//만들어놓은 함수 실행

// 이벤트핸들러에 들어갈 콜백함수, 버튼을 클릭하면 카드를 지울려고 만듬
function handleDeleteCard(e) {
  const button = e.target.closest('button');
  // addEventListener 에 쓸려고 만듬 받는 매개변수 이벤트동작
  // 이벤트동작한(여기서는 click 이벤트를 줄꺼니까 클릭한) 노드와 가장 가까운 버튼 찾아서 변수에 할당

  //만약 클릭한것이 클릭한곳에 버튼이 반환되지 않으면 종료시킴 이상한거 뜨는거 방지
  if (!button) return;

  // 선언한 button 변수와 가장 가까운 아트클 이라는 html요소 찾음 그리고 아티클 변수에 할당
  const article = button.closest('article');
  //할당한 변수 아티클의 사용자가 정의한 비표준속성의 인덱스에서 5번째까지 짤라버림
  //해당 코드에서는 data-index="user-${id}" 를찾음 user- 을 짜르고 끝에 . 올숫자만 가져옴
  const index = article.dataset.index.slice(5);

  //해당 데이터 지우기 지우기위해 해당 데이터 url주소를 넣음 idnex 값이 다 다르므로
  //동적으로 위에서 위에서 인덱스 변수에 할당된 숫자를 넣음
  tiger.delete(`${ENDPOINT}/${index}`).then(() => {
    // 위에서 말했듯 프라미스 객체이미로 then 사용가능, 삭제된 뒤에.
    // 요청 보내고 렌더링하기
    // clea함수 실행 우리가 만들어 놓은 함수로 인자에 넣은 노드를 싹 비워줌
    clearContents(userCardInner);
    //그리고 다시 렌더링 해서 지워진데이터 를 불러옴 그리고 화면에 뿌려줌.
    // 위에서 지우지 않고 뿌리면 기존에 데이터 + 지우고 나온 데이터가 뿌려짐 그래서 싹 지우고 다시 렌더링함.
    renderUserList();
  });
}

// 유저카드이너에 클릭이벤트 발생시 카드삭제함수 호출됨.
userCardInner.addEventListener('click', handleDeleteCard);

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate() {
  // gsap.to('.pop',{autoAlpha:1})
  createButton.classList.add('open');
}

function handleCancel(e) {
  e.stopPropagation();
  // gsap.to('.pop',{autoAlpha:0})
  createButton.classList.remove('open');
}
//클릭시 노드에 올려줘
function handleDone(e) {
  e.preventDefault();
  //서브밋으로 타입이 지정되어 있어서 기본속성 무시하기
  const name = getNode('#nameField').value;
  //변수에 네임필드 노드 할당
  const email = getNode('#emailField').value;
  //변수에 이메일피드 노드 할당
  const website = getNode('#siteField').value;
  //변수에 사이트필드 노드 할당

  tiger.post(ENDPOINT, { name, email, website }).then(() => {
    // 1. 팝업 닫기
    // gsap.to('.pop',{autoAlpha:0})
    createButton.classList.remove('open');

    // 2. 카드 컨텐츠 비우기
    clearContents(userCardInner);

    // 3. 유저카드 렌더링하기
    renderUserList();
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
