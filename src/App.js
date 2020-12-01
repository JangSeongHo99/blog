/* eslint-disabled-next-line */	

import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

// import logo from './logo.svg';
import './App.css';

function App() {
	var num;
	
	let [글제목, 글제목변경] = useState(['제5회 대한민국 SW융합 해커톤 대회', '빅데이터 기반 국민참여형 대중교통 문제 개선방안 공모전', '2020 군장병 SW 해커톤 대회']);
	let [따봉, 따봉변경] = useState([]);
	let [modal, modal변경] = useState(false);
	let [menu, menu변경] = useState(false);
	let [제목순서, 제목순서변경] = useState(0);
	
	function 제목바꾸기(){
		var newArray = [...글제목];
		newArray[0] = "여자코트 추천";
		글제목변경(newArray);
	}
	
	function 따봉초기화() {
		var newArray = [];
		for (num = 0; num < 글제목.length; num++) {
			newArray.push(0);
		}
		따봉변경(newArray);
		console.log(따봉);
	}
  return (
    <div className="App">
		  {따봉초기화}
    	<div className="black-nav">
			<div>개발 Blog</div>
			<IconButton arialabel = "menu" onClick={ ()=>{ menu변경(!menu)}}>
				<MenuRoundedIcon />
				{
					menu === true
					? <Menu></Menu>
						: null
				}
			</IconButton>
		</div>
		<button onClick={ 제목바꾸기 }> 버튼 </button>
		  <button onClick={()=>{modal변경(!modal)}}> 열고 닫기 </button>
		 {
			  글제목.map((title, index) => {
				  return (	
					  <div className="list">
						  <h3 onClick={()=>{제목순서변경(index)}}> { title } <span onClick={()=>따봉변경(따봉[index] + 1)}>👍</span> { 따봉[index] } </h3> 
						<p>2018.12.15</p>
						<hr/>
					</div>
					  )
			  })
		  }
		{
			  modal === true
			  ? <Modal 글제목 = {글제목} 제목순서 = {제목순서}></Modal>
			  : null
		  }
    </div>
  );
}

function Modal(props){
	return(
		<div className="modal">
			<h2>{props.글제목[props.제목순서]}</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}

function Menu(props){
	return(
		<div className="modal">
			<h2>제목</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}

export default App;
