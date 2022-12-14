import './styles.css'
import {useState} from "react";
import {data} from "./service";

let bankAccount=3000;

const funCityDis = (fromCity,toCity, transport)=>{
    if (data.city.length===0){
        return 0;
    }

    let from = data.city.filter(el=>{
        if(el.name===fromCity){
            return true
        }
        else return false
    })

    let to = data.city.filter(el=>{
        if(el.name===toCity){
            return true
        }
        else return false
    })

    let distance = ((from[0].x-to[0].x)**2+(from[0].y-to[0].y)**2)**0.5
    let tran = data.transport.filter(el=>{
        if(el.name===transport){
            return true
        }
        else return false
    })
    return {
        cityFrom:fromCity,
        cityTo:toCity,
        distance:distance,
        cost:distance/tran[0].cost,
        time: distance/tran[0].speed,
    };

}



const Example = ()=> {
    const [from, setFrom]=useState(data.city[0].name);
    const [to,setTo]=useState(data.city[0].name);
    const [typeOfSales,setTypeOfSales] = useState(data.transport[0].name);
    const [result, setResult]=useState({})
    const [approvedTicked,setApprovedTicked]=useState([]);
    const [num, setNum]=useState(0)


    return <div className='wrapper'>
        <div className='header'>
            <div className='title'> Поиск дешевых билетов</div>
            <div className='subtitle'> Легкий способ купить билеты дешево </div>
        </div>
        <div className='main'>
            <div>
                <div className='transports-block'>
                    <div className='from'>Transports</div>
                    <div className='transports'>
                        {data.transport.map(el=>{
                            return <div className={typeOfSales===el.name?'active-item':'transports-item'} onClick={()=>{
                                setTypeOfSales(el.name)
                            }
                            }>{el.name}</div>
                        })}
                    </div>
                </div>
            </div>
            <div className='blocks'>
                <div className='block'>
                    <div className='from'>From:</div>
                    <select onChange={(el)=>{
                        setFrom(el.target.value)}
                    }>
                        {data.city.map((el,index)=>{
                            return <option> {el.name} </option>
                        })}
                    </select>
                </div>
                <div className='block'>
                    <div className='from'>To:</div>
                    <select onChange={(el)=>{
                        setTo(el.target.value)}
                    }>
                        {data.city.map(el=>{
                            return <option> {el.name} </option>
                        })}
                    </select>
                </div>

                <div className='block'>
                    <div className='from'>Count:</div>
                    <input type="number" onChange={(event)=>{setNum(event.target.value)}}/>
                </div>
            </div>
            <div className='action'>
                <button onClick={()=> {
                    setResult(funCityDis(from,to,typeOfSales))
                }} disabled={to===from}>Найти билеты</button>
            </div>
        </div>

        <div className='result-block'>
            <div>result{result.cityFrom? <div className="ticket">
                <div><span>{result.cityFrom}</span><span>-></span><span>{result.cityTo}</span></div>
                    <div>
                        <div>time:{result.time}</div>
                        <div>cost:{result.cost}</div>
                    </div>
                <button onClick={()=>{
                setApprovedTicked([...approvedTicked, {...result,count:num}]);
                bankAccount=bankAccount-result.cost*num;
                setNum(0)
                setResult({});
                }
                } disabled={num===0}>buy</button>
                </div>:null}
            </div>
            <div>
                profile
                <div>
                    bankAccount :{bankAccount}
                </div>
                <div>
                    <div>tickets:</div>
                    {approvedTicked.map(el=>{
                        return<div className="ticket">
                            <div><span>{el.cityFrom}</span><span>-></span><span>{el.cityTo}</span></div>
                            <div>
                                <div>time:{el.time}</div>
                                <div>cost:{el.cost}</div>
                                <div>count: {el.count}</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}

export default Example;