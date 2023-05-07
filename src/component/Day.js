import dummy from "../db/data.json"
import { useParams } from "react-router-dom";

export default function Day(){

  // const inputDay=3;
  const {inputDay} =useParams();

  const wordList = dummy.words.filter(word => (word.day===inputDay))
// wordList : filter함수로 day가3인 요소들을 담은 배열집합 (words배열집합을 filter재가공한 또다른 배열집합)
 return(
  <>
  <h2> 오늘의 학습 : Day {inputDay} </h2>
    <table>
      <tbody>
        {wordList.map(word =>(
          <tr>
            <td><input type="checkbox"/></td>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
            <td> 
              <button>뜻 보기</button>
            </td>
            <td>
              <button className="btn_del">삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
 )
}