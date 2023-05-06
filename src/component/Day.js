import dummy from "../db/data.json"

export default function Day(){

  const inputDay=3;
  const wordList = dummy.words.filter(word => (word.day===inputDay))
// wordList : filter함수로 day가3인 요소들을 담은 배열집합 (words배열집합을 filter재가공한 또다른 배열집합)
 return(
  <>
    <table>
      <tbody>
        
        {wordList.map(word =>(
          <tr>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
 )
}