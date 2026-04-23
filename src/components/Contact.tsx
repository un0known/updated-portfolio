import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contact() {
    return (
        <section id="contact" className="relative py-28 px-6 overflow-hidden text-cente">

            {/* 🌌 gradient fade */}
            <div className="absolute inset-0 -z-20 bg-linear-to-b from-blue-950/20 via-black to-black"></div>

            {/* 💎 center glow */}
            <div className="absolute w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-10 -z-10"></div>

            <div className="relative z-10 mb-4 text-center">

                <h2 className="text-3xl font-bold mb-6">Contact</h2>

                <p className="text-gray-400 mb-6">Let’s work together 🚀</p>

                <a
                    href="mailto:deepakmehra7830@gmail.com" target="blank"
                    className="inline-block bg-blue-600 px-6 py-2 rounded-xl shadow-lg shadow-blue-500/30 hover:scale-105 transition"
                >
                    Email Me
                </a>
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://github.com/un0known" target="blank">
                        <BsGithub size={35} />
                    </a>
                    <a href="https://www.linkedin.com/in/deepak-singh-763487263/" target="blank">
                        <BsLinkedin size={35} />
                    </a>
                </div>

            </div>

            <hr className=' opacity-30' />

            <div className='sm:flex gap-5  md:gap-16 text-[14px] font-light mt-10 grid mx-auto max-w-[1240px]'>
                <div>
                    <p className='leading-6'>Email address: <br />
                        <a href="">deepakmehra7830@gamilcom</a></p>
                </div>
                <div>
                    <p className='leading-6'>Phone Number: <br />
                        +91 7830799870</p>
                </div>
                <div className=''>
                    <p className='leading-6'>Social:</p>
                    <ul className='flex gap-1 sm:gap-0'>
                        <li>
                            <a href="https://www.facebook.com/the.demon.3/" target="blank" className='  bg-opacity-10 px-1'>
                                facebook,
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/deepak__mehra" target="blank" className='  bg-opacity-10 px-1'>
                                Instagram,
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/deepak-singh-763487263/" target="blank" className='  bg-opacity-10 px-1'>
                                Linkdin
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
}