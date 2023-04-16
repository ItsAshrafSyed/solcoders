import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
  FaRedditAlien,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src="/icons/footer1.svg"
        alt="Hero"
        width={Infinity}
        height={Infinity}
        className="absolute left-0 -top-80 hidden md:block opacity-90 z-0"
      />
      <Image
        src="/icons/footer2.svg"
        alt="Hero"
        width={Infinity}
        height={Infinity}
        className="absolute right-0 -top-80 hidden md:block opacity-90 z-0"
      />
      <div className="relative z-50">
        <div className="px-8 container mx-auto ">
          <div className="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12 ">
            <div className="col-span-12 lg:col-span-3 order-last md:order-first">
              <div className="mb-14">
                <Link href="/" className="inline-block font-bold text-xl">
                  <Image
                    src="/images/logo.png"
                    width={75}
                    height={75}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="mb-8">
                <p className="flex items-center text-gray-400">
                  <FaDiscord className="inline-block text-2xl mr-3" />
                  <FaTwitter className="inline-block text-2xl mr-3" />
                  <FaGithub className="inline-block text-2xl mr-3" />
                  <FaTelegramPlane className="inline-block text-2xl mr-3" />
                  <FaRedditAlien className="inline-block text-2xl mr-3" />
                  <FaYoutube className="inline-block text-2xl mr-3" />
                </p>
              </div>
              <div className="mb-2">
                <p className="text-sm text-gray-400">
                  @2023 SolCoders. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <ul className="text-md">
                <li className="mb-3">
                  <a
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                    href="#"
                  >
                    How it works
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                    href="#"
                  >
                    Timeline
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                    href="#"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <ul className="text-md">
                <li className="mb-3">
                  <a
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                    href="#"
                  >
                    Student Guide
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                    href="#"
                  >
                    Mentors
                  </a>
                </li>

                <li className="mb-3">
                  <a
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                    href="#"
                  >
                    Job Board
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <ul className="text-md">
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                  >
                    Donate
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/about"
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                  >
                    Sponsors
                  </Link>
                </li>

                <li className="mb-3">
                  <Link
                    href="/news"
                    className="hover:text-gray-700 text-gray-400 transition duration-150 ease-in-out"
                  >
                    Past Program
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-3 flex h-fit">
              <div
                className="flex justify-center items-center"
                style={{ width: "100%" }}
              >
                <div className="m-2">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 43 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2776 0.197692C17.152 0.947396 15.2984 2.76811 13.7001 5.64335C13.214 6.51663 12.3243 8.48563 12.3902 8.5433C12.4643 8.61745 13.8072 8.88108 15.1995 9.09528C16.4188 9.28477 17.4651 9.39187 19.1787 9.51545L19.8543 9.55664V4.7783C19.8543 2.15022 19.846 -3.24249e-05 19.8378 -3.24249e-05C19.8213 -3.24249e-05 19.5742 0.0905914 19.2776 0.197692Z"
                      fill="#848895"
                    />
                    <path
                      d="M22.3262 4.78654V9.55664L23.0924 9.50721C24.5094 9.42482 26.3136 9.2271 27.5247 9.02114C28.744 8.81517 29.7244 8.60921 29.7985 8.5433C29.8479 8.48563 28.9911 6.5743 28.5133 5.70102C27.4176 3.69082 26.0005 1.99369 24.6247 1.07097C24.0727 0.692002 23.1335 0.230646 22.6392 0.0988302L22.3262 0.0164452V4.78654Z"
                      fill="#848895"
                    />
                    <path
                      d="M12.5557 1.6808C10.4137 2.61999 8.37055 3.97935 6.6899 5.56114L5.99786 6.21198L6.44274 6.43442C7.14302 6.80516 8.31289 7.30771 9.16145 7.61253L9.95235 7.90088L10.216 7.22532C10.8998 5.51171 12.0532 3.40265 12.9924 2.17511C13.6597 1.30183 13.7091 1.23592 13.6267 1.23592C13.5855 1.23592 13.1077 1.43365 12.5557 1.6808Z"
                      fill="#848895"
                    />
                    <path
                      d="M28.5882 1.38422C28.6542 1.47484 28.9178 1.82086 29.1732 2.15864C30.1618 3.46856 31.1834 5.31399 31.8837 7.03584L32.2297 7.90088L33.0206 7.61253C33.9433 7.28299 36.0688 6.35204 36.1265 6.26142C36.2171 6.12136 34.3222 4.46542 33.0782 3.60861C31.8589 2.76005 29.6181 1.58194 28.6624 1.27712C28.4811 1.21945 28.4811 1.22768 28.5882 1.38422Z"
                      fill="#848895"
                    />
                    <path
                      d="M3.84739 8.79052C2.2244 11.0479 0.980383 13.8984 0.411926 16.683C0.263632 17.4245 0 19.2782 0 19.6242C0 19.7642 0.214201 19.7725 3.86386 19.7725H7.72772L7.77716 19.1299C8.04079 15.645 8.3209 13.6677 8.8564 11.501C9.02117 10.8337 9.14475 10.2735 9.12827 10.257C9.12003 10.2487 8.55158 10.0181 7.86778 9.76267C7.19222 9.49904 6.11298 9.03768 5.47861 8.72462C4.85248 8.41155 4.32522 8.15616 4.31698 8.15616C4.31698 8.15616 4.10278 8.44451 3.84739 8.79052Z"
                      fill="#848895"
                    />
                    <path
                      d="M36.6946 8.72462C36.1014 9.0212 35.0304 9.4908 34.3219 9.75443C33.6134 10.0263 33.0367 10.2735 33.0367 10.3146C33.0367 10.3476 33.1273 10.7348 33.2426 11.1715C33.7287 13.0334 34.1242 15.4555 34.2725 17.5069C34.3219 18.1824 34.3878 18.9733 34.4043 19.2534L34.4537 19.7725H38.3176C41.9672 19.7725 42.1814 19.7642 42.1814 19.6242C42.1814 19.2617 41.9096 17.3586 41.7613 16.6501C41.267 14.3515 40.4184 12.1766 39.2568 10.2158C38.7542 9.36722 37.8974 8.14792 37.8233 8.1644C37.7985 8.17264 37.2878 8.41979 36.6946 8.72462Z"
                      fill="#848895"
                    />
                    <path
                      d="M11.3773 11.5916C10.8006 13.7419 10.4793 15.9251 10.2568 19.0887L10.2156 19.7725H15.0352H19.8547V15.9086V12.0447L19.2203 11.9953C16.2462 11.7729 14.3184 11.5257 12.5142 11.122C12.1105 11.0314 11.7315 10.9573 11.6656 10.9573C11.5915 10.9573 11.4926 11.1879 11.3773 11.5916Z"
                      fill="#848895"
                    />
                    <path
                      d="M29.6173 11.1303C27.9201 11.5175 26.0747 11.7564 22.9688 11.9953L22.3262 12.0447V15.9086V19.7725H27.1457H31.9652L31.924 19.0887C31.7016 15.9251 31.3803 13.7419 30.8036 11.5916C30.6059 10.8584 30.6635 10.8913 29.6173 11.1303Z"
                      fill="#848895"
                    />
                    <path
                      d="M0 22.3923C0 22.7548 0.271871 24.6579 0.420164 25.3664C1.07101 28.3982 2.44684 31.4465 4.18516 33.6791L4.32522 33.8604L5.47861 33.2919C6.11298 32.9788 7.19222 32.5175 7.86778 32.2538C8.55158 31.9984 9.12003 31.7678 9.12827 31.7595C9.14475 31.7431 9.02117 31.1828 8.8564 30.5155C8.3209 28.3488 8.04079 26.3715 7.77716 22.8784L7.72772 22.244H3.86386C0.214201 22.244 0 22.2523 0 22.3923Z"
                      fill="#848895"
                    />
                    <path
                      d="M10.2651 23.0018C10.3475 24.4435 10.5452 26.2395 10.7511 27.4753C10.9489 28.6369 11.4761 30.9437 11.5668 31.0343C11.5915 31.059 12.0858 30.9849 12.6625 30.8613C14.7798 30.4247 16.1968 30.2434 19.2203 30.021L19.8547 29.9716V26.1077V22.2438H15.0352H10.2156L10.2651 23.0018Z"
                      fill="#848895"
                    />
                    <path
                      d="M22.3262 26.1081V29.972L22.9276 30.0214C26.2724 30.2768 26.9974 30.3592 29.1065 30.7794C29.9138 30.9441 30.5976 31.0595 30.6141 31.0347C30.7047 30.9441 31.2402 28.6291 31.4297 27.4757C31.6357 26.2399 31.8334 24.4439 31.9158 23.0022L31.9652 22.2443H27.1457H22.3262V26.1081Z"
                      fill="#848895"
                    />
                    <path
                      d="M34.4048 22.755C34.3883 23.0434 34.3224 23.826 34.2729 24.5098C34.1164 26.5612 33.7786 28.695 33.2761 30.7134C33.136 31.2736 33.0372 31.7432 33.0454 31.7597C33.0619 31.7679 33.6386 31.9986 34.3141 32.254C34.9979 32.5177 36.0525 32.9708 36.6621 33.2756C37.2718 33.5722 37.799 33.8193 37.832 33.8193C37.8649 33.8193 38.0544 33.5969 38.2521 33.3168C39.9163 31.0347 41.1439 28.2419 41.7617 25.3501C41.91 24.6746 42.1819 22.7138 42.1819 22.3513C42.1819 22.2689 41.3663 22.2442 38.318 22.2442H34.4542L34.4048 22.755Z"
                      fill="#848895"
                    />
                    <path
                      d="M18.4125 32.5504C16.4764 32.6822 12.5879 33.2754 12.3901 33.4731C12.3242 33.5308 13.2305 35.5328 13.7001 36.3731C14.8122 38.3833 16.0727 39.8827 17.4898 40.896C18.05 41.2915 19.0139 41.7776 19.5494 41.9176L19.8542 42V37.2299V32.4598L19.6318 32.468C19.5 32.4763 18.9562 32.5092 18.4125 32.5504Z"
                      fill="#848895"
                    />
                    <path
                      d="M22.3262 37.2299V42L22.6392 41.9176C23.1335 41.7858 24.0727 41.3244 24.6247 40.9455C26.0005 40.0228 27.4176 38.3256 28.5133 36.3154C28.9911 35.4421 29.8479 33.5308 29.7985 33.4731C29.7326 33.4072 28.7769 33.2095 27.5741 33.0035C26.4454 32.8058 24.5588 32.5999 23.0512 32.501L22.3262 32.4598V37.2299Z"
                      fill="#848895"
                    />
                    <path
                      d="M8.95549 34.4782C8.41999 34.6759 7.53023 35.0549 6.98648 35.3185L5.98962 35.7964L6.70637 36.4719C8.39527 38.062 10.4631 39.4213 12.6299 40.3687C13.1654 40.6077 13.6267 40.7807 13.6432 40.756C13.6597 40.7395 13.4867 40.4841 13.256 40.1957C12.3086 39.0011 11.3282 37.3287 10.5867 35.6234C10.3313 35.0384 10.0759 34.4617 10.0265 34.3382L9.92763 34.1157L8.95549 34.4782Z"
                      fill="#848895"
                    />
                    <path
                      d="M31.8833 34.9722C31.1666 36.7599 29.972 38.8608 28.8845 40.2366C28.6785 40.5085 28.522 40.7391 28.5385 40.7639C28.6044 40.8215 30.491 39.9565 31.3396 39.4869C32.3694 38.9102 33.5228 38.1275 34.3466 37.4602C35.2034 36.7599 36.1756 35.829 36.1262 35.7548C36.0685 35.6642 33.9429 34.7333 33.0202 34.4037L32.2293 34.1154L31.8833 34.9722Z"
                      fill="#848895"
                    />
                  </svg>
                </div>
                <p className="m-1">
                  <span className="text-gray-400">EN</span>
                </p>
                <div className="m-2">
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4198 0.123981C15.7649 0.307313 15.9698 0.625449 15.9967 1.01907C16.0075 1.19162 15.9913 1.42888 15.9536 1.54211C15.8997 1.71466 15.1879 2.45338 12.2923 5.35435C9.88743 7.76464 8.63106 8.98865 8.48008 9.05875C8.21048 9.19355 7.76293 9.19894 7.49872 9.07492C7.36931 9.021 6.01588 7.70532 3.77814 5.47837C1.08208 2.78769 0.230121 1.90338 0.12767 1.70388C-0.357622 0.733292 0.623746 -0.28043 1.61051 0.167117C1.79384 0.247999 2.58109 0.997506 4.91588 3.3323L7.97322 6.38964L11.0899 3.27838C13.2413 1.12152 14.2605 0.140157 14.4006 0.080843C14.7026 -0.0431757 15.134 -0.0216074 15.4198 0.123981Z"
                      fill="#848895"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
