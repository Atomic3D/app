import Head from 'next/head'
import A from '../components/A'
const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={`qwe qwe${keywords}`}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navBar">
                <A href={'/'} text="Главная" />
                <A href={'/users'} text="Пользователи" />
            </div>
            <div>{children}</div>
            <style jsx>
                {`
                    .navBar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    )
}

export default MainContainer
