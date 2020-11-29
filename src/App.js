/* eslint-disabled-next-line */	

import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

// import logo from './logo.svg';
import './App.css';

function App() {
	
	let [글제목, 글제목변경] = useState(['제5회 대한민국 SW융합 해커톤 대회', '빅데이터 기반 국민참여형 대중교통 문제 개선방안 공모전', '2020 군장병 SW 해커톤 대회']);
	let [따봉, 따봉변경] = useState(0);
	let [modal, modal변경] = useState(false);
	let [menu, menu변경] = useState(false);
	
	function 제목바꾸기(){
		var newArray = [...글제목];
		newArray[0] = "여자코트 추천";
		글제목변경(newArray);
	}
	
  return (
    <div className="App">
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
    	<div className="list">
			<h3> {글제목[0]} <span onClick={ ()=>{ 따봉변경(따봉 + 1)}}>👍</span> { 따봉 } </h3>
			<p>2018.8.30 ~ 2018.9.1</p>
			<hr/>
		</div>
		<div className="list">
			<h3> {글제목[1]}</h3>
			<p>2018.12.15</p>
			<hr/>
		</div>
		<div className="list">
			<h3 onClick={ ()=>{modal변경(!modal)}}> {글제목[2]}</h3>
			<p>2020.09.16 ~ 2020.11.12</p>
			<hr/>
		</div>
		 {
			  modal === true
			  ? <Modal></Modal>
			  : null
		  }
		 {
			  글제목.map((title) => {
				  return (	
					  <div className="list">
						<h3> { title }</h3>
						<p>2018.12.15</p>
						<hr/>
					</div>
					  )
			  })
		  }
    </div>
  );
}

function Modal(){
	return(
		<div className="modal">
			<h2>제목</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}

function Menu(){
	return(
		<div className="modal">
			<h2>제목</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}

export default App;
