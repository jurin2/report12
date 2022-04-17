import {useParams} from 'react-router-dom';

function DetailPage(props){
    let {id} = useParams();
    return(
        <div key={props.id} className="col-md-4">
          <img src={`https://jurin2.github.io/report12/src/images/img${
             id<10 ? "0" + id : id
            }.jpg`} style={{width:'800px'}}/>
          <h2>{props.blogList[id].title}</h2>
          <p>{props.blogList[id].content}</p>
        </div>
    );
}

export default DetailPage;