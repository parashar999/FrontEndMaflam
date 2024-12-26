import React, { createContext, useState, useContext } from 'react';

// Create the Popup Context
export const PopupContext = createContext();

// Popup Provider to manage popup data
export const PopupProvider = ({ children }) => {
  const [popupData, setPopupData] = useState({
    titleEN: '',
    titleAR: '',
    descriptionEN: '',
    descriptionAR: '',
    buttonText1EN: '',
    buttonText1AR: '',
    buttonText2EN: '',
    buttonText2AR: '',
    linkText1EN: '',
    linkText1AR: '',
    linkText2EN: '',
    linkText2AR: '',
    button1Link: '',
    button2Link: ''
  });

  const setPopupValues = (status) => {
    switch (status) {
      case 'Contact not found':
        setPopupData({
          titleEN: 'User not found',
          titleAR: 'المستخدم غير موجود',
          descriptionEN: 'Please create an account to subscribe now.',
          descriptionAR: 'يرجى إنشاء حساب للاشتراك الآن.',
          buttonText1EN: 'Explore Maflam',
          buttonText1AR: 'استكشاف مافلام',
          buttonText2EN: 'Create an Account',
          buttonText2AR: 'إنشاء حساب',
          linkText1EN: 'https://maflam.com/',
          linkText1AR: '/signUp',
          linkText2EN: 'https://maflam.com/signUp',
          linkText2AR: '/signUp',
          button1Link: '/signUp',
          button2Link: '/signUp'
        });
        break;
      case 'Invalid password':
        setPopupData({
          titleEN: 'Wrong Password',
          titleAR: 'كلمة المرور خاطئة',
          descriptionEN: 'The password you entered is incorrect.',
          descriptionAR: 'كلمة المرور التي أدخلتها غير صحيحة.',
          buttonText1EN: 'Try Again',
          buttonText1AR: 'حاول مرة أخرى',
          buttonText2EN: 'Forgot Password?',
          buttonText2AR: 'هل نسيت كلمة المرور؟',
          linkText1EN: 'https://maflam.com/login',
          linkText1AR: '/login',
          linkText2EN: 'https://maflam.com/reset',
          linkText2AR: '/reset',
          button1Link: '/login',
          button2Link: '/reset'
        });
        break;
      case 'userExists':
        setPopupData({
          titleEN: 'Welcome Back!',
          titleAR: 'مرحباً بعودتك!',
          descriptionEN: 'You have successfully logged in.',
          descriptionAR: 'لقد قمت بتسجيل الدخول بنجاح.',
          buttonText1EN: 'Go to Dashboard',
          buttonText1AR: 'اذهب إلى لوحة التحكم',
          buttonText2EN: 'Go to My Courses',
          buttonText2AR: 'الذهاب إلى دوراتي',
          linkText1EN: 'https://learn.maflam.com/my/',
          linkText1AR: '/dashboard',
          linkText2EN: 'https://learn.maflam.com/my/courses.php',
          linkText2AR: '/courses',
          button1Link: '/dashboard',
          button2Link: '/courses'
        });
        break;
      case 'NotASubscriber':
        setPopupData({
          titleEN: 'No Active Courses!',
          titleAR: 'لا توجد دورات نشطة!',
          descriptionEN: 'You do not have any active courses. Click on Buy Now to subscribe to a course.',
          descriptionAR: 'ليس لديك أي دورات نشطة، انقر على اشترِ الآن للاشتراك في دورة.',
          buttonText1EN: 'Explore Maflam',
          buttonText1AR: 'استكشاف مافلام',
          buttonText2EN: 'Buy Now',
          buttonText2AR: 'اشترِ الآن',
          linkText1EN: 'https://maflam.com/',
          linkText1AR: '/dashboard',
          linkText2EN: 'https://maflam.com/R2/R3/prc/All',
          linkText2AR: '/buyCourses',
          button1Link: '/dashboard',
          button2Link: '/buyCourses'
        });
        break;
        case 'User with this contact already exists':
          setPopupData({
            titleEN: 'User Already Exists',
            titleAR: 'المستخدم موجود بالفعل',
            descriptionEN: 'A user with this contact already exists. Please use a different contact or click on Login.',
            descriptionAR: 'مستخدم بهذا الاتصال موجود بالفعل. يرجى استخدام اتصال مختلف أو النقر على تسجيل الدخول.',
            buttonText1EN: 'Create New Account',
            buttonText1AR: 'إنشاء حساب جديد',
            buttonText2EN: 'Login',
            buttonText2AR: 'تسجيل الدخول',
            linkText1EN: 'https://maflam.com/signUp',
            linkText1AR: '/signUp',
            linkText2EN: 'https://maflam.com/login',
            linkText2AR: '/login',
            button1Link: '/signUp',
            button2Link: '/login'
          });
          break;
          case 'Sign Up Successful':
            setPopupData({
              titleEN: 'Sign Up Successful!',
              titleAR: 'تم التسجيل بنجاح!',
              descriptionEN: 'You have successfully signed up. Welcome to Maflam!',
              descriptionAR: 'لقد قمت بالتسجيل بنجاح. مرحباً بك في مافلام!',
              buttonText1EN: 'Login',
              buttonText1AR: 'تسجيل الدخول',
              buttonText2EN: 'Explore and Buy Courses',
              buttonText2AR: 'استكشاف وشراء الدورات التدريبية',
              linkText1EN: 'https://maflam.com/login',
              linkText1AR: '/dashboard',
              linkText2EN: 'https://maflam.com/courses',
              linkText2AR: '/courses',
              button1Link: '/dashboard',
              button2Link: '/courses'
            });
            break;

            case 'canteditProfile':
              setPopupData({
                  titleEN: 'Profile Access Restricted',
                  titleAR: 'تم تقييد الوصول إلى الملف الشخصي',
                  descriptionEN: 'You should have at least one active course to access your profile.',
                  descriptionAR: 'يجب أن يكون لديك دورة تدريبية نشطة واحدة على الأقل للوصول إلى ملفك الشخصي.',
                  buttonText1EN: 'Buy Now',
                  buttonText1AR: 'اشتر الآن',
                  buttonText2EN: 'Go Back',
                  buttonText2AR: 'رجوع',
                  linkText1EN: 'https://maflam.com/R2/R3/prc/All',
                  linkText1AR: '/courses',
                  linkText2EN: 'https://maflam.com/dashboard',
                  linkText2AR: '/dashboard',
                  button1Link: '/courses',
                  button2Link: '/dashboard'
              });
              break;
          
      default:
        setPopupData({
          titleEN: 'Error',
          titleAR: 'خطأ',
          descriptionEN: 'An unknown error occurred.',
          descriptionAR: 'حدث خطأ غير معروف.',
          buttonText1EN: 'Go Back',
          buttonText1AR: 'الرجوع',
          buttonText2EN: 'Contact Us',
          buttonText2AR: 'اتصل بنا',
          linkText1EN: 'https://maflam.com/login',
          linkText1AR: '/login',
          linkText2EN: 'https://maflam.com/R2/R3/contact/*',
          linkText2AR: '/contact',
          button1Link: '/login',
          button2Link: '/contact'
        });
    }
  };

  return (
    <PopupContext.Provider value={{ popupData, setPopupValues }}>
      {children}
    </PopupContext.Provider>
  );
};

// Custom Hook to use Popup Context
export const usePopupContext = () => useContext(PopupContext);
