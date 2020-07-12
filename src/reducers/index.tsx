
const initialState = {
    rows: [
        {
            id: 0,
            columns: [
                {
                    id: 0,
                    elements: [
                        {   
                            id:0,
                            type: 'title',
                            style: {
                                marginTop: '21px',
                                marginRight: '0px',
                                marginBottom: '21px',
                                marginLeft:'0px'
                            }
                        }
                    ],
                    nextId: 1,
                    width: 100,
                }
            ],
            nextId: 1,
            columnSetting: 
            {
                width: [],
            }
        }
    ]
}

const rootReducer = (state:any = initialState, action) => {
    switch(action){
        case ('CREATE_ROW'):

    }
return state;
}

export default rootReducer;