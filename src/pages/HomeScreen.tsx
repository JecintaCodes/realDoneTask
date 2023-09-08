import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import MyColumnCard from '../components/static/MyColumnCard'
import MyColumnCard from '../Components/reUse/MyColumnCard'
import { readTask } from '../utils/taskApi'
import { useQuery } from "@tanstack/react-query"
import { readProgress } from '../utils/progressApi'
import { readDone } from '../utils/doneApi'



const HomeScreen = () => {

    // const [state, setState] = useState<any>([])

    // useEffect(() => {
    //     readTask().then((res: any) => {
    //         setState(res)
    //     })
    // }, [])

    const { data } = useQuery({
        queryKey: ["tasks"],
        queryFn: readTask,
        refetchInterval: 1000
    })

    const { data: progress } = useQuery({
        queryKey: ["progress"],
        queryFn: readProgress,
        refetchInterval: 1000
    })

    const { data: done } = useQuery({
        queryKey: ["done"],
        queryFn: readDone,
        refetchInterval: 1000
    })



    return (
        <div>
            <Container>
                <Main>
                    <MyColumnCard
                        title="task"
                        icon
                        but
                        data={data}
                    />
                    <MyColumnCard
                        title="progress"
                        data={progress}

                    />
                    <MyColumnCard
                        title="Done"
                        data={done}

                    />
                </Main>
            </Container>
        </div>
    )
}

export default HomeScreen

const Main = styled.div`
display:flex;
justify-content: center;
width: 100%;
`

const Container = styled.div`
display:flex;
justify-content: center;
width: calc(100% - 17%);
padding-top: 50px;
margin-left: 260px;
`
