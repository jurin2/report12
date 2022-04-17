import './App.css';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, NavDropdown, Button, CardGroup, Card, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import srcData from './srcData';
import SecContainer from './SecContainer';
import DetailPage from './DetailPage';

function Modal(props){
  return(
    <section id="modal" className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <button onClick={props.onModalClose}>닫기</button>
        </div>
        <div className="modal-body">
          <div>{props.listTit}</div>
          <div>{props.listContent}</div>
        </div>
      </div>
    </section>
  );
}

function Write(props){
  return (
    <section id="write" className="write">
      <div className="write-container">
        <div className="write-header">
          <button onClick={()=>{props.onWriteClose();}}>취소</button>
        </div>
        <div className="write-body">
          <input onChange={(e)=>{props.setWriteTit(e.target.value)}} placeholder="제목"/>                
          <textarea onChange={(e)=>{props.setWriteContent(e.target.value)}} placeholder="내용"/>      
          {/* <button onClick={()=>{props.onListPush();props.onWriteClose(); props.onWriteClear()}}>저장</button> */}
        </div>        
      </div>
    </section>
  );
}


function fnGetData(blogList,setBlogList){
  const axios = require('axios');
  axios.get('https://jurin2.github.io/report12/serverData.json')
  .then((respons)=>{
    setBlogList([...blogList,...respons.data]);
  })
  .catch((error)=>{
    console.log(error);
  })
}

function App() {
  let [writeTit,setWriteTit] = useState('');
  let [writeContent,setWriteContent] = useState('');
  let [blogList,setBlogList] = useState(srcData);
  let [viewIdx,viewIdxChange]=useState(0);
  let [write,setWrite]=useState(false);
  let [modal,setModal]=useState(false);

  function listPush(){
    // 조건
    // 참
    if(blogList.title != '' && blogList.content != ''){
      let newListTit = [...blogList.title];
      newListTit.unshift(writeTit);
      setBlogList.title(newListTit);
      let newListcontent = [... blogList.content];
      newListcontent.unshift(writeContent);
      setBlogList.content(newListcontent);
    }
    // 거짓
    // 아무것 안함
}

function writeClear(){
  setBlogList.title('');
  setBlogList.content('');
}

  return (
    <div className="App">
      <NavBar/>
      <section>
        <Switch>
          <Route path="/Detail/:id">          
              <DetailPage blogList={blogList}/>
          </Route>
          <Route path="/">
            <SecContainer blogList={blogList} setBlogList={setBlogList} onWriteOpen={()=>{setWrite(true)}} fnGetData={fnGetData} onModalOpen={()=>{setModal(true)}}/> 
          </Route>
        </Switch>
      </section> 

        {
          // 모달창
          modal == true ? <Modal blogList={blogList[viewIdx]} onModalClick={()=>{setModal(false)}}/> : null
        }

        {
          // 기록창
          write == true 
          ? <Write 
                    onWriteClose = {()=>{setWrite(false)}} 
                    setWriteTit = {(inputValue)=>{setWriteTit(inputValue)}}
                    setWriteContent = {(inputValue)=>{setWriteContent(inputValue)}}
                    onListPush={listPush}
                    onWriteClear={writeClear}
            />
          : null
        } 
    </div>
  );
}

export default App;
