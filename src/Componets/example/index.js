import './styles.css'
import {useState} from "react";

const data = {
    date:new Date(),
    city: [
        {
            name:'Almaty',
            x:12,
            y:30,
        },
        {
            name:'Astana',
            x:20,
            y:49,
        },
        {
            name:'Moscow',
            x:50,
            y:-159,
        },
        {
            name:'London',
            x:-490,
            y:200,
        },
        {
            name:'Dubai',
            x:500,
            y:-49,
        }
    ],
    transport:[
        {name:'plane',
        speed:4,
            cost:40
        },
        {name:'car',
            speed:2,
            cost:20
        },
        {name:'train',
            speed:3,
            cost:30
        }
    ]
}


const busket = {
    waitingList:[],
    approve:[],
}

let bankAccount=3000;



const funCityDis = (fromCity,toCity, transport)=>{
    if (data.city.length===0){
        return 20;
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
    if (tran.length===0){


    }else busket.waitingList.push(
        {
            cityFrom:fromCity,
            cityTo:toCity,
            distance:distance,
            cost:distance/tran[0].cost,
            time: distance/tran[0].speed,
        }
    )
console.log({
    cityFrom:fromCity,
    cityTo:toCity,
    distance:distance,
    cost:distance/tran[0].cost,
    time: distance/tran[0].speed,
})

    return      {
        cityFrom:fromCity,
        cityTo:toCity,
        distance:distance,
        cost:distance/tran[0].cost,
        time: distance/tran[0].speed,
    };

}

const updateBusket=(index)=>{
    busket.approve.push(busket.waitingList[index])
    bankAccount=bankAccount-busket.approve[0].cost
}

funCityDis("Almaty", "Dubai", "plane")
funCityDis("Astana", "Dubai", "plane")
updateBusket(0)

console.log(busket, bankAccount)






const Example = ()=> {
    const [from, setFrom]=useState(null);
    const [to,setTo]=useState(null);
    const [transport,setTransport]=useState(null);
    const [typeOfSales,setTypeOfSales] = useState(data.transport[0].name);
    const [result, setResult]=useState({})




    return <div className='wrapper'>
        <div className='header'>
            <div className='title'> Поиск дешевых авиабилетов</div>
            <div className='subtitle'> Легкий способ купить авиабилеты дешево </div>
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
                    <input type="number"/>
                </div>
            </div>

            <div className='action'>

                <button onClick={()=> {

                    setResult(funCityDis(from,to,typeOfSales))


                }}>Найти билеты</button>
            </div>
        </div>

        <div className='result-block'>
            <div>
                result
                <div>
                    {result?.cityFrom}
                </div>
            </div>
            <div>
                profile
            </div>
        </div>
    </div>
}

export default Example;