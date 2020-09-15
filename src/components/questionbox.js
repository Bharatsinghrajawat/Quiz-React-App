import React,{useState} from 'react';  
// class QuestionBox extends React.Component{
    
//     render(){
//         return(
//             <div className='questionbox'>
//                 <div className='question'>{this.props.question}</div>
//                 <div className='options'>{this.props.options.map((options,index) => <button onClick={this.props.onClick} key={index}>{options}</button>)}</div>
//             </div>
//         )
//     }
// }
const divStyle = {
    color: 'blue',
   
  };

const QuestionBox = ({question,options,selected}) => {
    const [answer , setAnswer] = useState(options);
    return(
        <div className='questionbox'>
            <div className='question'>{question}</div>
            <div className='options'>{answer.map((text,index) => <button  className='options' style={divStyle} onClick={() => {setAnswer([text]);  selected(text)}} key={index} >{text}</button>)}</div>
            
        </div>
    )
}

export default QuestionBox;