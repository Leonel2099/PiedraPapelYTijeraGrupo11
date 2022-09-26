import './Styles/Main.css'
import LoadingButton from './LoadingButton'
export default function Main() {
    return (
        <div>
            <div className='contain-main'>
                <section className="title">
                    <h1>Piedra, Papel o Tijera</h1>
                </section>
                <section className='container-img'>
                    <figure className='img1'></figure>
                    <figure className='img2'></figure>
                </section>
                <section>
                    <LoadingButton/>
                </section>
            </div>
        </div>

    )
};
