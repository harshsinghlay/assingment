import Button from './common/Button';

function PlayWell() {
    return (
        <div>
            <section>
                <div className="h-[600px] my-10 bg-primary rounded-4xl flex justify-center items-center text-center mt-8">
                    <div className="max-w-[425px] mx-auto text-white flex flex-col gap-[20px] items-center">
                        <h2
                            className="font-ruberoid text-4xl 
          "
                        >
                            Plays well with everything
                        </h2>
                        <p className="max-w-[848px] font-montserrat  text-[16px]">
                            Connect Test to your CRM, payment gateway, email
                            service, or analytics stack in minutes — with
                            built-in integrations and support for custom APIs.
                        </p>
                        <div>
                            <Button
                                text="Book a Demo"
                                variant='gradient'
                                className="py-4 px-7 bg-primary text-white rounded-[100px] w-full sm:w-auto"
                            ></Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PlayWell;
