const Registration = () => {
  return (
    <div className="Registration">
      <div className="bg-slate-50 flex flex-col justify-center items-stretch">
        <div className="bg-slate-50 w-full max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <div className="flex-col fill-indigo-500 overflow-hidden relative flex min-h-[1024px] grow items-center pl-14 pr-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b1a9f90a861bdc6c2fed8ccf1d134976c39c6b6b6bd025bd315da6dba6ef8f2?"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <img
                  loading="lazy"
                  alt="img"
                  srcSet="..."
                  className="aspect-[1.06] object-contain object-center w-[85px] overflow-hidden max-w-full mt-1 rounded-[50%] self-start"
                />
                <div className="relative text-white text-7xl font-bold whitespace-nowrap mt-80 max-md:text-4xl max-md:mt-10">
                  BASE
                </div>
                <div className="relative justify-between items-center flex w-[299px] max-w-full gap-5 ml-20 mt-96 mb-4 self-start max-md:ml-2.5 max-md:mt-10">
                  <img
                    loading="lazy"
                    alt="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32814a49ff8855fe8008217b2515933cb05af86ea7222b6be4fc60d82d882666?"
                    className="aspect-square object-contain object-center w-full fill-white overflow-hidden shrink-0 flex-1 my-auto"
                  />
                  <img
                    loading="lazy"
                    alt="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f33491022e1cbdfe038421f70df70c03a2062954f7890f435cee6cdb33e0613?"
                    className="aspect-[1.02] object-contain object-center w-full fill-white overflow-hidden shrink-0 flex-1 my-auto"
                  />
                  <img
                    loading="lazy"
                    alt="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b146c4cb46549ff66c0e714fa20f85d734e9236c342906512c5b14c4fc288146?"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    alt="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d23608c297b28f800dc97b0e18a589c359fabebebba07445c34ba994e95ab72?"
                    className="aspect-[1.04] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
                <div className="text-black text-4xl font-bold self-stretch max-md:max-w-full">
                  Sign In
                </div>
                <div className="text-black text-base self-stretch mt-4 max-md:max-w-full">
                  Sign in to your account
                </div>
                <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                  <div className="flex-col overflow-hidden relative flex aspect-[6.1875] items-stretch justify-between gap-5 px-5 py-2 max-md:px-5">
                    <img
                      loading="lazy"
                      alt="img"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cfc3eda621369aae7b1346327159da160ab5a6a303bb10d4a6fbccb96717c93?"
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <img
                      loading="lazy"
                      alt="img"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/11ed72cf772413cafc39e7b32e40e5cb049386428c58f699cb44ccb41f39844b?"
                      className="aspect-[0.94] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="relative justify-center text-zinc-500 text-center text-xs mt-1">
                      Sign in with Google
                    </div>
                  </div>
                  <div className="bg-white flex justify-between gap-5 px-14 py-2 rounded-xl items-start max-md:px-5">
                    <img
                      loading="lazy"
                      alt="img"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/200156a8fae31a8a4ea31446b6c04ff69fb330aa240e7369b660f7cf17ac4b81?"
                      className="aspect-[0.75] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="justify-center text-zinc-500 text-center text-xs grow shrink basis-auto mt-1.5">
                      Sign in with Apple
                    </div>
                  </div>
                </div>
                <div className="bg-white self-stretch flex flex-col items-stretch mt-7 px-12 py-9 rounded-3xl max-md:max-w-full max-md:px-5">
                  <div className="text-black text-base max-md:max-w-full">
                    Email address
                  </div>
                  <div className="text-black text-base bg-neutral-100 justify-center mt-4 pl-4 pr-16 py-4 rounded-xl items-start max-md:max-w-full max-md:pr-5">
                    johndoe@gmail.com
                  </div>
                  <div className="text-black text-base mt-7 max-md:max-w-full">
                    Password
                  </div>
                  <div className="bg-gray-200 flex items-center justify-between gap-3 mt-4 px-6 py-3 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:px-5">
                    <div className="text-black text-base grow whitespace-nowrap my-auto">
                      ••••••••
                    </div>
                    <div className="bg-neutral-400 self-stretch w-px shrink-0 h-5" />
                  </div>
                  <div className="text-blue-600 text-base mt-7 max-md:max-w-full">
                    Forgot password?
                  </div>
                  <div className="text-white text-center text-base font-bold bg-indigo-500 justify-center items-center mt-6 px-16 py-3.5 rounded-xl max-md:max-w-full max-md:px-5">
                    Sign In
                  </div>
                </div>
                <div className="text-blue-600 text-center text-base self-center mt-7 max-md:max-w-full">
                  Don’t have an account?{" "}
                  <span className="text-blue-600">Register here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
