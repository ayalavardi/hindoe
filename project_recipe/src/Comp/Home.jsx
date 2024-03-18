import logo from '../Pic/הינדו 2.png'
import meat from '../Pic/551cf29ee311a70315f6476fee10fdab.jpg'
import stam from '../Pic/קישקוש.png'
// import '../Style/styleb.css'

import '../Style/styleHome.css'
// import { Slider } from '@mui/base'

export const Home = () => {
    return <>
        <h3>  Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </h3>
        <div className='odot'>
            <img src={logo} height={'200px'}></img>
            <div className='articlel'><h2>!ברוכים הבאים לפסטיבל הטעמים שלנו</h2>

                <article>האתר שבפניכם הוא עולם מרתק ומגוון של מתכונים ייחודיים,
                    <br />
                    כל אחד בטעמו וברוחו. כאן תוכלו למצוא מאות מתכונים מכל העולם,
                    <br />
                     רעיונות למנות עיקריות, עטיפות, 
                     <br />
                     וקינוחים שיעטיפו את חברי המשפחה והחברים שלכם.
                    <br />
                </article></div>
        </div>
        <div className='weanmil'>
            <img src={meat} height={'200px'}></img>
            <div className='articlew'><h2>המתכון שכולם מחכים לו: סטייק ברביקיו עם טווח טעמים מטריף! 🍖</h2>
                <article>
                    שוטף הקיץ הגיע, ועמו הזמן להצטרף לקרב הברביקיו הגדול.
                    <br />
                    הסטייק, במרינדת תבלינים משובחה, מזוגג ברומן הגריל האמיתי.
                    <br />
                    הבשר, מיוחד וטעים בכל אחד מכם יכול להכין בו את הסטייק האישי שלו.
                    <br />
                    על האש החמה, עם תנור רומן רשמי, הוא יושם במרקם המושלם בכל פרסטקטיבה.
                </article></div>
        </div>
        <div className='odot'>
            <img src={stam} height={'200px'}></img>
            <div className='articlel'><h2>!!תחרות קרב סכינים יוצאת לדרךךך</h2><article> קרב סכינים אינו דורש ידע כלשהו במטבח. <br />גם כאלו שלא החזיקו סכין מעולם (וגם בשלנים מנוסים) <br />מוצאים עצמם מבשלים ומכינים מנות מדהימות ומבטיחים<br /> לעצמם ש"השבוע הם יכינו את זה בבית" 😉

            </article></div>
        </div>
    </>
}

