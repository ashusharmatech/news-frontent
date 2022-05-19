import { child, get } from 'firebase/database';
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { dbRef } from './firebase';

const DatabaseContext = createContext()


export const DatabaseProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

    }, [])


    function getArticles() {
        get(child(dbRef, `article`)).then((snapshot) => {
            if (snapshot.exists()) {
                let articlesFromDb = JSON.parse(JSON.stringify(snapshot.val()));
                let articleList = [];
                for (const [ key, value ] of Object.entries(articlesFromDb)) {
                    articleList.push(value);
				}
                setArticles(articleList);

                



            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    return <DatabaseContext.Provider value={{
        getArticles,
        articles
    }}>
        {children}
    </DatabaseContext.Provider>
}

export default DatabaseContext
