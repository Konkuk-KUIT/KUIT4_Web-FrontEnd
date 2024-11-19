export default function PasswordPage(){
    return (<>
    <Header title = {''} 
    subtitle={<span style={{color:'red'}}>
        
        연속된 숫자는 사용할 수 없어요</span>}/>
    <PasswordIndicator length={4} value={'123'}/>
    <NumberKeypads number={[1,2,3,4,5,6,7,8,9]} onPress={console.log}/>
    </>);
}