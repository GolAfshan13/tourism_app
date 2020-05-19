import imamMosque from './places/imam-mosque.jpg';
import artMuseum from './places/art-museum.jpg';
import mashrootehHouse from './places/mashrooteh-house.jpg';
import musicMuseum  from './places/music-museum.jpg';
import ParkNazhvan  from './places/Park-Nazhvan.jpg';
import RockingMinarets from './places/Rocking-Minarets.jpg';
import sofehzoo from './places/sofeh-zoo.jpg';
import teleCabinSofeh  from './places/tele-cabin-sofeh.jpg';
import vankchurch  from './places/vank-church.jpg';

const places = [
    {
        id:1, name:'موزه ی هنر معاصر',idName:'artMuseum',
        srcs:artMuseum,price:'4000 تومان ',
        url:'/artMuseum', group:'museum'
    },
    {
        id:2, name:'مسجد امام',idName:'imamMosque', 
        srcs:imamMosque, price:'3000 تومان ',
        url:'/imamMosque', group:'tourism'
    },
    {
        id:3, name:'خانه مشروطه', idName:'mashrootehHouse',
        srcs:mashrootehHouse, price:'5000 تومان ',
        url:'/mashrootehHouse', group:'tourism'
    },
    {
        id:4, name:'موزه ی موسیقی', idName:'musicMuseum',
        srcs:musicMuseum, price:'6000 تومان ',
        url:'/musicMuseum', group:'museum'
    },
    {
        id:5, name:'پارک ناژوان', idName:'ParkNazhvan',
        srcs:ParkNazhvan, price:'4000 تومان ',
        url:'/ParkNazhvan', group:'tourism'
    },
    {
        id:6, name:'منارجنبان', idName:'RockingMinarets',
        srcs:RockingMinarets, price:'3000 تومان ',
        url:'/RockingMinarets', group:'tourism'
    },
    {
        id:7, name:'باغ وحش صفه', idName:'sofehzoo',
        srcs:sofehzoo, price:'3000 تومان ',
        url:'/sofehzoo', group:'zoo'
    },
    {
        id:8, name:'تله کابین صفه', idName:'teleCabinSofeh',
        srcs:teleCabinSofeh, price:'4000 تومان ',
        url:'/teleCabinSofeh', group:'tourism'
    },
    {
        id:9, name:'کلیسا وانک', idName:'vankchurch',
        srcs:vankchurch, price:'4000 تومان ',
        url:'/vankchurch', group:'tourism',
        description:`مساحت کلیسای آمنا پرکیج ۸۷۳۱ متر مربع است، که ۳۸۵۷ متر مربع آن ساختمان و بقیه فضای سبز و باغ وانک است. در دو سوی درِ ورودی وانک دو اتاق برای پذیرایی ساخته‌اند. در بالای در ورودی، برج ناقوس در سه طبقه بنا شده که در طبقه دوم آن ساعت بزرگی به وزن سیصد کیلوگرم قرار دارد. در چهار سوی برج، چهار صفحه مدور ساعت نصب شده که قطر هر صفحه ۱۰۴ سانتی‌متر است. این برج ناقوس و ساعت آن را «ماردیروس هوردانانیان» در سال ۱۹۳۱ میلادی به کلیسا هدیه کرده‌است. در سمت راست درِ ورودی وانک کتیبه‌ای به ابعاد ۴۰×۵۳ سانتی‌متر با سنگ مرمر نصب شده‌است. متن کتیبه به این شرح است:
        «این برج و ساعت آن را ماردیروس گوورگ هوردانانیان در سال ۱۹۳۱ میلادی به یادبود برادر مرحومش که در سال ۱۹۲۴ میلادی فوت کرده ساخته و هدیه کرده‌است.»
        کلیسای آمنا پرکیج بر خلاف کلیساهای کهن ارمنی که بیشتر با سنگ ساخته شده‌اند، با خشت خام بنا گردیده‌است. دیوار بیرونی کلیسا با آجر و دیوار درونی آن را با اندود گچ که بر روی آن نقاشی و تزیین شده پوشانده‌اند. کلیسا دارای دو گنبد است؛ گنبد کوچک بر روی محل استقرار عامه مردم قرار دارد، و گنبد بزرگ بر روی قسمت مقدم محراب کلیسا ساخته شده‌است. ارتفاع دیوارهای کلیسا از سطح حیاط تا بام طبقه دوم ۱۱/۷۵ متر است. در داخل کلیسا، در فاصله ۶/۲۵ متری دیوار غربی آن، دو ستون مربع که هر یک از اضلاع آن دو متر است احداث شده‌است. در بخش غربی کلیسا با استفاده از بخشی از این ستونها و پایه‌های دیوارهای جانبی چهار طاق نمای بلند ساخته‌اند؛ ارتفاع این طاق نماها ۱۰/۲۵ متر است. گنبد کوچک کلیسا که ارتفاع چندانی ندارد، بر روی این طاق نماها قرار دارد.
        گنبد کلیساهای کهن ارمنی مخروطی شکل است، ولی گنبد کلیسای وانک شبیه گنبد مساجد ایرانی عصر صفوی ساخته شده‌است. در بام کلیسا، در قسمت فوقانی درِ ورودی حد فاصل دیوار غربی و حاشیه گنبد کوچک کلیسا، در محوطه‌ای مربع مانند، برج ناقوس کوچکی که دومین برج ناقوس کلیسا است ساخته شده‌است. هر ضلع این مربع ۲/۷۵ متر است. در نقطه تلاقی هر دو ضلع مربع مزبور یک ستون آجری بنا کرده‌اند؛ ارتفاع این ستون‌ها سه متر است و در ارتفاع ۲/۵ متری آنها، هر دو ستون به وسیله یک تیر چوبی به یکدیگر متصل شده‌اند. از قسمت فوقانی تیرهای مزبور هر دو ستون با یک قوس جناغی به یکدیگر اتصال یافته‌اند. حد فاصل قوسهای جناغی و ستونها را با آجر پوشانده‌اند. `,

    }
]

export default places;