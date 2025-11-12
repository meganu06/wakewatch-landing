import React from 'react';

const Pricing = () => {
  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          Sign Up
        </h1>
        <div className="flex flex-col justify-center items-center">
          <form className="w-1/2 rounded-xl overflow-hidden">
            <input className="w-full rounded-xl border px-3 py-2 text-black" />
          </form>
          <a
            className={`w-1/8 flex items-center justify-center m-5 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
          >
            Submit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
