import React from "react";
import TitleBox from "../../TitleBox/TitleBox";
import "./TermsBox.css";
import { useNavigate } from "react-router-dom";
const TermsBox = () => {
    let navigate = useNavigate()
    let goUpWindow = () => {
        window.scroll(0, 0);
    };
    return (
        <>
            <div className="term-box min-h-[100vh]">
                <TitleBox
                    title={`اتفاقية الاستخدام`}
                    description={`منصات المشاهير المملوكة لمؤسسة منصات المشاهير للتسويق الالكتروني والمسجلة في وزارة التجارة بموجب سجل تجاري رقم:4030454416 ورخصة إعلامية مسجلة في الهيئة العامة للإعلام المرئي والمسموع برقم 147537، وموقعها الرئيسي المملكة العربية السعودية ترحّب بكم ، وتبلغكم بأنكم سوف تجدون أدناه الشروط والأحكام المُنظّمة لاستخدامكم لمنصات المشاهير، وكافة الآثار القانونية التي تنتج عن استخدامكم لخدمات منصات المشاهير في الشبكة العنكبوتية ، حيث أن استخدام أي شخصٍ كان لمنصات المشاهير سواءً كان متابعا ، أو تاجراً ، أو مشهور ، فإن هذا يُعد موافقة وقبول منه وهو بكامل أهليته المعتبرة شرعاً ونظاماً وقانوناً لكافة مواد وبنود وأحكام هذه الاتفاقية وهو تأكيد لالتزامكم بأنظمتها ولما ذُكر فيها، ونشير إليكم بأن منصات المشاهير ستكون عبارة عن ( موقع إلكتروني و تطبيق على الهواتف المحمولة ) ، وتعتبر هذه الاتفاقية سارية المفعول ونافذة بمجرد قيامكم بالموافقة عليها والبدء في التسجيل بمنصات المشاهير بموجب المادتين الخامسة والعاشرة من نظام التعاملات الإلكترونية السعودي.
`}
                />
                <div className="container h-full flex justify-center items-center mt-[48px]">
                    <div className="content min-h-[681px] w-full py-[43px]   px-[15px] md:px-[58px] flex gap-[43px] flex-col justify-start items-start">
                        <div className="box flex-col justify-start items-start">
                            <h6> المادة الأولى – المقدّمة التعريفات:
                            </h6>
                            <p>
                                -  يعتبر التمهيد أعلاه جزءاً لا يتجزأ من هذه الاتفاقية، كما تجدون أدناه الدلالات والتعريفات للعبارات الرئيسية المستخدمة في هذه الاتفاقية:
                                - (منصات المشاهير المملوكة لمؤسسة منصات المشاهير للتسويق الالكتروني)؛ يقصَد بهذه العبارة مؤسسة تطبيق المشاهير للتسويق الالكتروني، ويشمل هذا التعريف كافة أشكال مؤسسة تطبيق المشاهير للتسويق الالكتروني على الشبكة العنكبوتية، سواءً كانت موقع إلكتروني، أو تطبيقات الكترونية على الهواتف المحمولة.
                                - (المستخدم يشمل: التاجر/ المتابع)؛ يقصَد بهذه العبارة التاجر كل تاجر يسجّل في منصات المشاهير لإنشاء ملفه الإلكتروني، سواءً كان شخص طبيعي أو معنوي، ويشمل هذا التعريف كافة أوجه المتجر طالما أنه يقوم بتجارته عن طريق منصات المشاهير، ويشمل ذلك الملف الإلكتروني للتاجر. (المتابع) يقصَد بهذه العبارة المتابع كل متابع يقوم بمتابعة المشهور أو عملاء المتاجر، وذلك عن طريق الصفحة الالكترونية الذي أسسها عبر منصات المشاهير، أو تقديم طلب خدمات من المشاهير مثل (إهداءات، حضور حفل، حضور تدشين).
                                - (المشهور) يقصَد بهذه العبارة المعلن من قبل التاجر في منصات المشاهير الإلكترونية.
                                - (الاتفاقية) يقصَد بهذه العبارة قواعد وشروط وأحكام استخدام منصات المشاهير الإلكترونية، أي كافة أحكام وشروط هذه الاتفاقية، والتي تحكم وتنظّم العلاقة فيما بين أطراف هذه الاتفاقية وبين منصات المشاهير.
                                - (العقد) يقصّد بهذه العبارة كافة احكام وشروط والتزامات الأطراف وبين منصات المشاهير الخاضعة للأنظمة واللوائح السارية في المملكة العربية السعودية، والتي تحكم وتنظّم العلاقة فيما بين أطراف هذا العقد وبين منصات المشاهير.
                                - (مزود الخدمة) يقصَد بهذه العبارة الخدمات التي تقوم منصات المشاهير بتوفيرها للمستخدمين والمشاهير ويُقصد بـ توفير الخدمات، أي توفير الربط بين التاجر والمشهور، حيث أنه لا علاقة لمنصات المشاهير بالاتفاق المخالف عن الموضح بـ (قواعد وأحكام استخدام منصات المشاهير) بين التاجر والمشهور.
                                - (الصفحة الإلكترونية / الحساب الالكتروني / الملف الشخصي) يقصد بهذه العبارة كل مستخدم (تاجر / متابع) ومشهور يقوم بإنشاء صفحة إلكترونية في لوحة التحكم عبر منصات المشاهير لتقديم تجارته وخدماته في المنصة.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>  المادة الثانية – أهلية مستخدمي المنصة -المشهور القانونية:   </h6>
                            <p>
                                1-يقر التاجر -المشهور بأنه ذا أهلية قانونية معتبرة شرعاً وقانوناً، وأن عمره لا يقل عن ثمانية عشرة عاماً، كما هو معتبر في القوانين والأنظمة المنصوصة بالمملكة العربية السعودية، وأنه ذا دراية كافية لإنشاء وتأسيس وإدارة صفحته الإلكترونية عبر منصات المشاهير.
                                2-استثناءً مما ورد في البند الأول (1) من المادة الثانية (2)، يجوز للتاجر-المشهور أن يمارس التجارة إذا كان يقل عن سن الرشد المعتبر في المملكة العربية السعودية (ثمانية عشرة عاماً)، حيث أنه يلتزم بأن يقدّم ما يثبت موافقة وليه على تأسيسه لصفحته الإلكترونية، كصك الولاية، وإفادة الموافقة الموقّعة من قبل وليه القانوني الشرعي في حال استلزم ذلك.
                                3-يقر التاجر بأنه ذا أهلية سليمة وأنه غير مصاب بأي عارض من عوارض الأهلية.
                                4-في حال قيام التاجر بالتسجيل كمؤسسة أو شركة، أو أي شكل نظامي آخر، فإنّ هذه المؤسسة أو الشركة أو الشكل النظامي المسجّل عن طريقه يجب أن تتوافر فيه الأهلية القانونية والنظامية والشرعية اللازمة للقيام بأعمال التجارة عبر منصات المشاهير الإلكترونية.
                                5- يوافق التاجر – المشهور بأنه في حال مخالفته لهذه المادة ” أهلية التاجر القانونية ” فإنه يتحمّل تبعات هذه المخالفة أمام المتابعين أو المشاهير أو الغير، حيث أن منصات المشاهير لا علاقة لها بتعاملات التاجر مع المشهور أو الغير من الناحية القانونية و النظامية والشرعية، كما أنه يحق لمنصات المشاهير في هذه الحالة مساءلة التاجر بموجب أحكام المسئولية العقدية، ومطالبته بالتعويض عن الأضرار التي قد تنشأ نتيجة هذه المخالفة، ومن قبيل هذه الأضرار ما يصيب منصات المشاهير في سمعتها أمام التجار الآخرين أو المشاهير أو المستخدمين أو أمام الغير.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الثالثة – طبيعة التزام منصات المشاهير:</h6>
                            <p>
                                -  أنت تعلم أن منصات المشاهير تعتبر منصات إلكترونية تقنية على شبكة الانترنت تتيح للتاجر الذي يوافق على هذه الاتفاقية تأسيس صفحة في لوحة التحكم الخاصة به، وممارسة نشاطه عبر صفحته، ومهمتها تنتهي عند هذا الحد. وتتيح للمشهور الإعلان عن نفسه واستقطاب فرص إعلانية، فليس هناك أدنى مسئولية على منصات المشاهير حول المخالفات التي يقوم بها التاجر في صفحته والمشهور في إعلانه بالمخالفة لأحكام هذه الاتفاقية، وليس لمنصات المشاهير أي علاقة بالنسبة للتعاملات التي تتم بين التاجر والمشهور.
                                -  إنّ مهمة منصات المشاهير هي تقديم أدوات الدعم الالكتروني، عن طريق تأسيس المنصات، حيث أن التزام منصات المشاهير بموجب هذه الاتفاقية هو فقط انشاء صفحة إلكترونية رقمية في لوحة التحكم الخاصة بالمستخدم (تاجر / متابع) او المشهور لدى منصات المشاهير الالكترونية، وظهور الملف الشخصي الخاص بالمشهور أمام المستخدمين.
                                -  قد توفّر منصات المشاهير خدمات أخرى للمستخدمين أو المشهور كخدمات الدعم التسويقي أو خدمة الإهداءات للمناسبات الاجتماعية، وكذلك قد توفّر له بوابات دفع الكترونية عبر الانترنت، وجميع خدمات منصات المشاهير تخضع لمواد وبنود وأحكام اتفاقية الاستخدام هذه.
                                -  لا تلتزم منصات المشاهير بإتمام عمليات الاعلانات أو الخدمات بين المشهور والتاجر، حيث أنّ التزامها ينتهي بتقديم خدمات انشاء صفحة في لوحة التحكم عبر منصات المشاهير، ولا يضر ذلك بالخدمات الأخرى التي تستمر منصات المشاهير بتقديمها كخدمات التوجيه والإرشاد والدعم الفني والتسويق ووسائل الدفع.
                                -  إنّ جميع التعاملات التي تتم بين التاجر والمشهور لا علاقة لها بشخص منصات المشاهير، ومنصات المشاهير غير مسؤولة عنها، حيث أنّ هذا التعامل هو علاقة تعاقدية مستقلة تخضع للاتفاق الذي يبرم بين التاجر والمشهور.
                                وبناءً عليه فإذا تخلّف التاجر عن سداد ثمن الخدمة الذي يوفّره المشهور فلا علاقة لمنصات المشاهير بهذه المخالفات، وغير مسؤولة إذا تخلف المشهور وعدم التزامه عن تقديم الخدمة المطلوبة من التاجر، أو لم يلتزم أحد الاطراف في تنفيذ التزاماته التي جرى الاتفاق عليها أو لم ينفذها على الوجه المطلوب فإنّ منصات المشاهير غير مسؤولة عن ما ينتج عن هذه التصرفات، إنّ منصات المشاهير غير مسؤولة عن أي مخالفات تحدث أو يتم ارتكابها بين التاجر والمشهور.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الرابعة – ضوابط إنشاء حساب على منصات المشاهير:
                            </h6>
                            <p>
                                -  يجوز لكل شخص توافرت فيه الأهلية القانونية المعتبرة نظاماً وشرعاً إنشاء صفحته الإلكترونية وفقاً لقواعد وأحكام اتفاقية الاستخدام وعلى وجه الخصوص” المادة الثانية – أهلية التاجر القانونية“.
                                -  يجب أن تكون صفحة لوحة التحكم الذي تم تأسيسها وفقاً لاتفاقية استخدام منصات المشاهير غير مخالفة للأنظمة والقوانين في المملكة العربية السعودية، ويلتزم التاجر بتوضيح ماهية الأعمال التي يقوم بالتجارة الالكترونية عن طريقها، وماهية الخدمات أو المنتجات التي يقدّمها أو يبيعها، وتخلي منصات المشاهير مسئوليتها عن المتجر او الإعلانات المقدمة من المشهور المخالفة لأحكام النظام السعودي في المملكة العربية السعودية والآداب العامة، و يبقى لمنصات المشاهير دائماً الحق في رفض تسجيل أي صفحة الكترونية لا تتوافق مع القوانين والأنظمة المنصوصة في المملكة العربية السعودية أو أحكام هذه الاتفاقية، وعليه فإن التاجر و المشهور يقر بموجب أحكام الاتفاقية أن صفحته الالكترونية او إعلانه لا يخالف النظام العام في المملكة العربية السعودية أو الآداب الإسلامية.
                                -  يجب أن تكون الصفحة الالكترونية الذي تم تأسيسها عن طريق منصات المشاهير غير مخالفة لقواعد وأحكام اتفاقية الاستخدام هذه، كما يقر التاجر والمشهور بأن المحل الذي ينصب عليه التعامل في صفحته غير مخالف لهذه الاتفاقية وغير مخالف للأنظمة والقوانين المعمول بها في المملكة العربية السعودية.
                                -  لا يحق لأي شخص استخدام منصات المشاهير إذا ألغيت صفحته من قبل منصات المشاهير أو بموجب أوامر أو أحكام قضائية.
                                -  في حال قيام أي مستخدم (تاجر /متابع) بالتسجيل كمؤسسة أو شركة، أو مؤسسة خيرية أو جهة اعتبارية، فإن المؤسسة أو الشركة أو الجهة المسجّلة تكون ملزمة بكافة القواعد والأحكام المذكورة في اتفاقية الاستخدام الخاصة بمنصات المشاهير.
                                -  ينبغي على كافة المشاهير والمستخدمين (تاجر /متابع) الالتزام بكافة القوانين المعمول بها لتنظيم التجارة عبر الانترنت وكذلك الالتزام بنظام الجرائم المعلوماتية وأنظمة وزارة التجارة والاستثمار ونظام التعاملات الإلكترونية ونظام التجارة الإلكترونية.
                                -  يقر التاجر والمشهور بأنه قبل تسجيله في منصات المشاهير الالكترونية قد تحقق من توافر جميع الإجراءات والاشتراطات المطلوبة من قبل الجهات الرسمية في المملكة العربية السعودية وقد استوفى جميع هذه الإجراءات والاشتراطات لممارسة نشاطه في صفحته الإلكترونية المسجلة عبر منصات المشاهير.
                                -  في حالة كان التاجر المتقدّم لطلب الانضمام وتأسيس صفحته عبارة عن تاجر فرد “شخص طبيعي”، فيلتزم كذلك بالتحقق من الاشتراطات المطلوبة لدى الجهات الرسمية وتوفيرها بحسب طبيعة نشاط الفرد التاجر، حيث أن التاجر الفرد يُقر بأنه ملتزم بهذه الاشتراطات وملتزم بتوفيرها وتجهيزها، كما يلتزم التاجر الفرد بتوفير رقم السجل التجاري وغير ذلك من المعلومات اللازمة والوثائق التي تطلبها منصات المشاهير.
                                -  في حالة كان التاجر المتقدم لطلب الانضمام وتأسيس صفحته يمثل مؤسسة تجارية أو شركة أو مؤسسة خيرية أو جهة اعتبارية فلابُد من تزويد منصات المشاهير بكافة المعلومات والوثائق الثبوتية، مثل السجل التجاري وأي وثائق أخرى تطلبها منصات المشاهير للتسجيل ولإثبات الشخصية القانونية.
                                - يجب أن يلتزم المشهور والتاجر بالتزامات التسجيل المحددة في” المادة الخامسة – الحسابات والتزامات التسجيل “، وجميع قواعد وأحكام اتفاقية الاستخدام.
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الخامسة – ضوابط الحسابات والتزامات التسجيل:</h6>
                            <p>
                                -  فور التقدم بطلب تسجيل صفحة الكترونية عبر منصات المشاهير تكون مطالباً بالإفصاح عن معلومات محددة واختيار اسم مستخدم وكلمة مرور سرية لاستعمالها عند الوصول لخدمات منصات المشاهير، وبعد تنشيط حسابك سوف تصبح مستخدمًا لخدمات منصات المشاهير، وبذلك تكون قد وافقت على:
                                -  أن تكون مسؤولاً عن المحافظة على سرية معلومات حسابك وسرية كلمة المرور، وتكون بذلك موافقاً على إعلام منصات المشاهير حالاً بأي استخدام غير مفوض به لمعلومات حسابك لدى منصات المشاهير أو أي اختراق آخر لمعلوماتك السرية.
                                -  لن تكون منصات المشاهير بأي حال من الأحوال مسؤولًة عن أي خسارة قد تلحق بك بشكل مباشر أو غير مباشر معنوية أو مادية نتيجة كشف معلومات اسم المستخدم أو كلمة الدخول أو في حال إساءة استخدام الصفحة.
                                -  أنت تلتزم باستخدام صفحتك الالكترونية بنفسك، حيث أنك مسؤولاً عنها مسؤولية كاملة، وفي حال استخدام غيرك لها فهذا يعني أنك قد فوّضته باستخدام الصفحة باسمك ولحسابك ما لم يقم المستخدم (تاجر /متابع) -المشهور بإبلاغ إدارة المشاهير بعكس ذلك.
                                - أنت تلتزم عند استخدام منصات المشاهير أن تستخدمها بكل جدية ومصداقية، وأن تلتزم بقواعد وأحكام اتفاقية الاستخدام وأن تلتزم بالضوابط النظامية والقانونية المعمول بها في المملكة العربية السعودية، وتعتبر ملزماً بتعويض منصات المشاهير عن أي خسائر مباشرة أو غير مباشرة قد تلحق بمنصات المشاهير نتيجة أي استخدام غير شرعي أو غير حقيقي أو غير مفوض لحسابك من طرفك أو من طرف أي شخص آخر حصل على مفاتيح الوصول إلى حسابك بالمنصات سواء كان لإنجاز الخدمات باستعمال اسم المستخدم وكلمة المرور أو نتيجة لإهمالك على المحافظة على سرية اسم المستخدم وكلمة المرور ، و سواء بتفويض منك أو بلا تفويض.
                                -  أنت تلتزم بالإفصاح عن معلومات حقيقية وصحيحة ومحدثة وكاملة وقانونية عن نفسك حسبما هو مطلوب أثناء التسجيل لدى منصات المشاهير وتلتزم بتحديث بياناتك في حال تغييرها في الواقع أو في حال الحاجة إلى ذلك.
                                -  ألا تدرج ضمن اسم المستخدم أي من تفاصيل الاتصال بك كعناوين البريد الإلكتروني أو أرقام هواتفك أو أي تفاصيل شخصية، أو أي عبارة تُشير إلى علاقة شخصية أو تجارية بينك وبين منصات المشاهير أو منسوبيها أو مُلّاكها.
                                -  ألا تضع ما يشير في صفحتك إلى أي علاقة مباشرة أو غير مباشرة بين الصفحة الإلكترونية ومنصات المشاهير أو إدارتها أو مُلّاكها أو منسوبيها، حيث أن منصات المشاهير لا علاقة لها بما تقوم به وهي غير مسؤولة عن نشاط صفحتك الإلكترونية.
                                - إن منصات المشاهير تلتزم بالتعامل مع معلوماتك الشخصية وعناوين الاتصال بك بسريّة وفقاً لأحكام <span className=" underline cursor-pointer" onClick={() => { navigate("/home/privacy"); goUpWindow() }}>سياسة الخصوصية وسرية المعلومات</span> المعمول بها لدى منصات المشاهير.
                                -  سوف تكون ملزمًا بالحفاظ على بيانات التسجيل وتحديثها دائمًا للإبقاء عليها حقيقية وصحيحة وراهنة وكاملة وقانونية، وإذا أفصحت عن معلومات غير حقيقية أو غير صحيحة أو غير راهنة أو غير كاملة أو غير قانونية او مخالفة لما جاء في اتفاقية الاستخدام، فإنّ منصات المشاهير تمتلك الحق في وقف أو تجميد أو إلغاء صفحتك الالكترونية في المنصات، وذلك دون إلحاق الأضرار بحقوق منصات المشاهير الأخرى ووسائلها المشروعة في استرداد حقوقها وحماية باقي المستخدمين.
                                - في حالة عدم الالتزام بأي مما ورد أعلاه فإنّ لإدارة منصات المشاهير الحق في إيقاف أو إلغاء صفحتك أو حجبك من الوصول لخدمات منصات المشاهير مرة أخرى. كما نحتفظ كذلك بالحق في إلغاء أي حسابات غير مؤكدة وغير مثبتة أو عمليات أو حسابات مر عليها مدة طويلة دون نشاط.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة السادسة – الاتصالات الإلكترونية ووسائل التواصل الرسمية:</h6>
                            <p>
                                -  يوافق المستخدم (تاجر /متابع) -المشهور في منصات المشاهير على أن يتم التواصل معه عبر البريد الإلكتروني، أو من خلال قيام إدارة منصات المشاهير ببث رسائل عامة ترد إلى كافة المستخدمين والمشاهير أو إلى مستخدمين محددين حال الوصول إلى حساباتهم داخل منصات المشاهير.
                                كما يوافق المستخدم (تاجر /متابع) -المشهور في منصات المشاهير على أنّ جميع الاتفاقيات والإعلانات والبيانات والاتصالات الأخرى التي تُزود بها الكترونياً تقوم مقام مثيلاتها المكتوبة، وهي حجة قائمة بذاتها، في تلبية الاحتياجات القانونية.
                                -  سوف تقوم منصات المشاهير خلال فترة تسجيلك لدى المنصات بإرسال رسائل إلكترونية ترويجية لتعريفك بأي تغيرات أو إجراءات أو نشاطات دعائية جديدة قد تضاف إلى منصات المشاهير
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة السابعة – عمليات الدفع والتعديلات على اتفاقية الاستخدام والرسوم:
                            </h6>
                            <p>
                                -  أنت تعلم وتوافق على أنّ منصات المشاهير تقوم بإعلامك عن أي تعديل على هذه الاتفاقية، وبموجبه تتضاعف التزاماتك أو تتضاءل حقوقك وفقاً لأي تعديلات قد تجري على اتفاقية الاستخدام هذه.
                                -  أنت توافق على أنّ منصات المشاهير تملك بمطلق صلاحيتها ودون تحملها المسؤولية القانونية أن تجري أي تعديلات أساسية أو فرعية على هذه الاتفاقية، ويتم إعلام المستخدمين (تاجر /متابع) -المشهور عن هذا التعديل بأي وسيلة تقنية يتم توفيرها، ويجوز أن يكون ذلك عن طريق البريد الإلكتروني أو ببث رسالة عامة لكافة المستخدمين ويكون هذا الاعلام قانوني ونافي للجهالة ومُلزِم للصفحة الإلكترونية لأحكام الاتفاقية بما فيها من تعديلات.
                                -  في حال الاعتراض على أي تعديل على اتفاقية الاستخدام فإن ذلك قد يكون عقبة أمام الوصول إلى الصفحة، حيث أنّه للاستفادة من خدمات منصات المشاهير يجب الموافقة على هذه الاتفاقية وعلى أي تعديل يطرأ عليها، ولذلك في حالة عدم قبول التعديل تأمل منكم منصات المشاهير التوقف عن استخدام خدماتها حيث أنّه بمجرد وصولكم إلى حسابكم في منصات المشاهير أو استخدامكم لمنصات المشاهير يُعد قُبولًا منكم للتعديلات وموافقة كاملة تامة نافية للجهالة، وتسعد منصات المشاهير الإجابة على استفساراتكم بشأن هذه الاتفاقية واستقبال أي اقتراحات يراها المستخدم ( تاجر /متابع ) -المشهور.
                                -  تحتفظ منصات المشاهير بحقها في إضافة أو زيادة أو خفض أو خصم أي رسوم أو نفقات بموجب قواعد وأحكام اتفاقية الاستخدام، على أي من المستخدمين (تاجر /متابع) أو المشاهير أي كان سبب تسجيلهم.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الثامنة – خدمات الدفع والسداد في منصات المشاهير:</h6>
                            <p>
                                -  توفّر منصات المشاهير عبر شركائها نظام الدفع والسداد فيمكن أن يتم عبر الانترنت كليا من خلال خيارات الدفع المتوفرة على منصات المشاهير أو من خلال أي طريقة دفع توفرها منصات المشاهير من حين لآخر.
                                -  كافة الرسوم تحتسب بالريال السعودي، وعلى التاجر والمشهور دفع كافة الرسوم المستحقة بالمنصات مضافاً إليها أي نفقات أخرى تضيفها منصات المشاهير، على أن يتم السداد بواسطة الوسائل المعتمدة والمحددة والمتاحة عن طريق منصات المشاهير.
                                -  ليس هناك أي علاقة لمنصات المشاهير بطريقة الدفع عند الاستلام، فطريقة الدفع هذه مخالفة لأحكام وشروط منصات المشاهير وخاضعة للعلاقة فيما بين المشهور والتاجر.
                                - إنّ توفير منصات المشاهير لخدمة الدفع عبر الانترنت عن طريق المنصات هو بغرض التسهيل والمحافظة على حقوق التجار والمشهور.
                                -  يلتزم التاجر والمشهور بتحديد سعر الخدمة التي يرغب بعرضها في صفحته الإلكترونية وفقاً للقيمة المرغوبة من قبل المشهور ولا علاقة لمنصات المشاهير بأي حال من الأحوال بسوء تقدير تكلفة الاعلانات أو الخدمات المعروضة في المتاجر على منصات المشاهير، حيث أنّ تقديرها بالشكل المتعارف عليه تجارياً هو التزاماً واقع على عاتق التاجر والمشهور.
                                -  لإدارة منصات المشاهير الحق في إلغاء أو تعديل أو تغيير أي من وسائل الدفع التي قامت بإتاحتها على منصات المشاهير.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة التاسعة – معلوماتك الشخصية ومعلومات تفاصيل العمليات:</h6>
                            <p>
                                -  لا مانع لديك بأن تمنح منصات المشاهير حقاً غير محدود، ودائم وغير قابل للإلغاء، ومعفي من المصاريف، ومرخص باستخدام معلومات أو مواد شخصية أو غير ذلك مما وفرتها أو زودت بها المنصات أو أعلنتها على المنصات من خلال انضمامك إليها أو تأسيسك لصفحتك الإلكترونية، وذلك عبر النماذج المخصصة للتواصل والتسجيل، أو عبر أية رسالة إلكترونية أو أي من قنوات الاتصال المتاحة بالمنصات. وذلك بهدف تحقيق أي من المصالح التي تراها المنصات.
                                - أنت الوحيد المسؤول عن المعلومات التي قمت بإرسالها أو نشرها وينحصر دور منصات المشاهير بالسماح لك بعرض هذه المعلومات عن طريق المنصات ومن خلال قنواتها الإعلانية.
                                -  تخضع سرية معلومات المتاجر والتجار لقواعد “<span className=" underline cursor-pointer" onClick={() => { navigate("/home/privacy"); goUpWindow() }}>سياسة الخصوصية وسرية المعلومات</span>” الخاصة بمنصات المشاهير.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة العاشرة – تعهد التاجر بـ الالتزام بالقوانين والأنظمة في المملكة العربية السعودية:
                            </h6>
                            <p>
                                -  يتعهّد التاجر بالالتزام بكافة القوانين والأنظمة المعمول بها داخل المملكة العربية السعودية حيال منتجاته أو أثناء استخدامه لمنصات المشاهير، وكذا القوانين والشروط والأحكام المعمول بها والمُنظِّمة لاستخدام فضاء الإنترنت واتفاقية الاستخدام و<span className=" underline cursor-pointer" onClick={() => { navigate("/home/privacy"); goUpWindow() }}>سياسة الخصوصية وسرية المعلومات</span> المعمول بها لدى منصات المشاهير.
                                -  يتعهّد المشهور بالالتزام بكافة القوانين والأنظمة المعمول بها داخل المملكة العربية السعودية حيال إعلاناته أو أثناء استخدامه لمنصات المشاهير، وكذا القوانين والشروط والأحكام المعمول بها والمُنظِّمة لاستخدام فضاء الإنترنت واتفاقية الاستخدام و<span className=" underline cursor-pointer" onClick={() => { navigate("/home/privacy"); goUpWindow() }}>سياسة الخصوصية وسرية المعلومات</span> المعمول بها لدى منصات المشاهير.
                                - في حال مخالفة أي من التجار أو المشاهير لما ورد في المادة العاشرة فإنّه يُقر بحق منصات المشاهير في اتخاذ أي من الإجراءات التالية وهي على سبيل المثال لا الحصر: التنبيه، إيقاف الخدمة وإغلاق الصفحة الالكترونية وإعادة أي مبالغ معلقة في المدفوعات الإلكترونية للمشاهير أو للمنصات.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>
                                المادة الحادية عشر – الحقوق:

                            </h6>
                            <p>
                                -  كافة المحتويات المتواجدة على منصات المشاهير، إلكترونية كانت أو غير ذلك، مكتوبة أو غير مكتوبة، على سبيل المثال لا الحصر: النصوص المكتوبة وغير المكتوبة – التصاميم الجرافيكي – الأفكار التقنية – الشعارات – العروض – أيقونات الأزرار – الرموز – المقاطع الصوتية – البيانات المجمّعة والبرامج الإلكترونية، هي ملك لمنصات المشاهير وحقوقها محفوظة لمنصات المشاهير، ولا يحق لكائنًا من كان أن يستخدمها بأي شكل من الأشكال سواء كان استخدام مباشر أو غير مباشر أو عن طريق طرف ثالث.
                                -  تُنوه إدارة منصات المشاهير على أنها سوف تتخذ اللازم حيال التجاوز والتعدي على أي من حقوق منصات المشاهير أو ملكيتها الفكرية.
                                -  لا تتحمّل منصات المشاهير المسؤولية في حال التعدي على حقوق الملكية الفكرية المملوكة للتُجّار الأعضاء في المنصات أو للمشاهير المسجّلة لديها.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الثانية عشر– الملكية الفكرية:</h6>
                            <p>
                                -  تحترم إدارة منصات المشاهير حقوق الملكية الفكرية الخاصة بالتجار والتي كوّنوها عبر متاجرهم، سواءً كانت مملوكة لهم قبل تأسيس صفحته الإلكترونية أم بعد تأسيسه.
                                -  يحترم المستخدم (تاجر /متابع) والمشهور حقوق الملكية الفكرية الخاصة بمنصات المشاهير، والتي من ضمنها منصات المشاهير نفسها، والكلمات والشعارات والرموز الأخرى الخاصة بمنصات المشاهير أو المعروضة على منصات المشاهير حيث أنّ منصات المشاهير وكل حق يتبع منصات المشاهير هي حقوق محمية بموجب حقوق الملكية الفكرية وقوانين العلامات التجارية وتُعد ملكية خالصة لمنصات المشاهير ولا يحق بأي حال من الأحوال التعدي عليها أو استخدامها دون تفويض من إدارة منصات المشاهير.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الثالثة عشر – المستخدم (المتابع):</h6>
                            <p>
                                -  أنظمة منصات المشاهير التقنية تحتفظ ببيانات المستخدمين وذلك من اجل تسهيل الوصول إلى المنصات وإتمامهم الخدمات التي يرغبون بها.
                                -  حرصًا من منصات المشاهير على حقوق المستخدمين (متابع)، على الرغم من أنّ المستخدم ليس طرفاً في هذه الاتفاقية، وتحقيقًا لأحد أهم أهداف منصات المشاهير بتقديم خدمة ذات جودة عالية للجميع، ومن باب ضمان حصول المستخدمين لكافة خدماتهم المطلوبة بشكل سليم فإنّ منصات المشاهير توضّح للمتجر التالي:

                                1- في حال قام المستخدم بطلب خدمة بأحد طرق الدفع المتوفرة على منصات المشاهير، ولم يتم حصوله على الخدمة، حينها يكون من حق المستخدم إبلاغ منصات المشاهير ولمنصات المشاهير الحق في اتخاذ ما تراه مناسبا حيال التاجر أو المشهور الذي خالف قواعد هذه الاتفاقية، وفقاً لقواعد هذه الاتفاقية. غير أنّ منصات المشاهير غير مسؤولة قانوناً أو شرعاً عن هذا الإخلال الحاصل من قبل التاجر أو المشهور في مواجهة المستخدم، حيث أنها ليست طرفاً في العلاقة بين المستخدم والتاجر أو المشهور، ولكنها تقوم بذلك لدواعي تحسين جودة منصات المشاهير والتجار والمشاهير المتواجدين في المنصات.
                                2- للمستخدم (متابع) مراجعة طلبه للتأكد من الخدمة المطلوبة، حيث أنّ منصات المشاهير غير مسؤولة عن العلاقة التي بين المستخدم (متابع) والتاجر أو المشهور.
                                3- إنّ منصات المشاهير لا تلتزم بأي حال من الأحوال وفق هذه المادة وهذا البند باتخاذ ردّة فعل تجاه شكوى المستخدم (متابع) وإنما تخضع ردّة فعل المنصات تجاه شكوى المستخدم (متابع) إلى محض رغبة منصات المشاهير ووفق ما تراه المنصات مناسبًا، وفقاً لقواعد هذه الاتفاقية. وبما يحافظ على مصلحتها وسمعتها التجارية والاقتصادية، وعلى كل حال فإنّ منصات المشاهير قدّ تتخذ بعض الإجراءات تجاه التجار أو المشاهير التي تتعمد خداع أو تظليل أو غش المستخدم (متابع)، مثل: تجميد الصفحة الالكترونية أو لفت نظر الصفحة الالكترونية إلى عدم تكرار هذا الأمر أو إلزام الصفحة الالكترونية بتعويض المستخدم (متابع)، وذلك انطلاقًا من رغبة منصات المشاهير في حفظ وحماية حقوق كافة المستخدمين والمسجّلين لديها.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الرابعة عشر– مسؤولية منصات المشاهير:
                            </h6>
                            <p>
                                -  منصات المشاهير غير مسؤولة بأي شكل من الأشكال عن أي أداء غير مرضٍ أو متأخر من قبل التجار أو المشاهير أو بوابات الدفع الإلكتروني أو البنوك أو عدم التزام المستخدمين (متابع) بالسداد، ولا عن أي خسائر، أو أعطال أو تأخير، او عدم جودة الخدمة المقدمة من قبل التجار أو المشاهير.
                                -  منصات المشاهير لا تتحمل أي مطالبات أو مسؤوليات نشأت نتيجة خسائر مالية أو تشويه سمعة أو قذف أو أي أضرار تنشأ نتيجة لسوء استخدام أو إساءة استخدام أو عدم قدرة على استخدام منصات المشاهير، إنّ منصات المشاهير لا تتحمل أي مسؤوليات أو مطالبات في مثل هذه الحالات.
                                -  منصات المشاهير أو مسؤوليها أو منسوبيها أو مُلّاكها غير مسؤولين عن أي مطالبة أو نزاع أو تكاليف أو أضرار أو أي مسؤولية أو أي خسارة مباشرة أو غير مباشرة لأي طرف نشأت عن فعل قام به أحد المستخدمين (تاجر /متابع) للمنصات.
                                -  منصات المشاهير ومنسوبيها ومُلّاكها ومن يمثلها ويمثلهم لا علاقة لهم بأي مسؤولية تخص اعلان او منتج غير مصرح به وفق قوانين وأنظمة المملكة العربية السعودية ويتم استخدامه لأغراض غير شرعية وغير نظامية، ولا يحق لأي شخص أو جهة الرجوع على منصات المشاهير بأي دعوى أو مطالبة أو تعويض فيما يخص سوء الاستخدام المذكور، حيث أنّ جميع المنتجات أو الخدمات المقدّمة في منصات المشاهير الالكترونية تُقدّم عن طريق التجار ومتاجرهم وذلك وفق الأنظمة.
                                -  منصّة المشاهير ومنسوبيها وملّاكها ومن يمثّلها ويمثّلهم لا علاقة لهم بأي نشاط غير شرعي أو غير نظامي يقوم به التاجر او المشهور، أو أي اعلان او نشاط يخالف الأنظمة والتعليمات المنصوصة في المملكة العربية السعودية، حيث تنحصر مسؤولية منصات المشاهير فقط في توفير وتقديم أدوات الدعم الالكتروني المتمثّل في تأسيس الصفحة الإلكترونية وما يتبع ذلك من خدمات دعم إلكتروني.
                                -  تُنوّه إدارة منصات المشاهير على كافة التجار أو المشاهير إلى أنّها في حال وصول تنبيه او ملاحظاتها لأي أنشطة مشبوهة أو مخالفة للقوانين والأنظمة المعمول بها داخل المملكة العربية السعودية يجري التخطيط لارتكابها أو جاري ارتكابها أو جرت على منصات المشاهير فإنّها سوف تتقدّم إلى إبلاغ السلطات المختصة عن هذه الأنشطة. وهي غير مسؤولة بأي حال عن هذه المخالفات التي تتم دون علم أو ملاحظة منصات المشاهير.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الخامسة عشر – سرية المعلومات:
                            </h6>
                            <p>
                                -  تُحيطكم منصات المشاهير علمًا بأنّ الشبكة العنكبوتية (فضاء الإنترنت) ليس وسيلة آمنة، وسرية المعلومات الشخصية لا يمكن أن تكون مضمونة 100% في فضاء الإنترنت.
                                -  تتخذ منصات المشاهير معايير (ملموسة وتنظيمية وتقنية) ذات جودة عالية لحماية المستخدمين (تاجر /متابع) والمشاهير ومنع وصول شخص غير مفوض إلى معلومات المستخدمين (تاجر /متابع) الشخصية أو صفحاتهم الإلكترونية وحفظها.
                                - أنت تعلم وتوافق على أنّ منصات المشاهير قد تستخدم معلوماتك التي زودتها بها، بهدف تقديم الخدمات لك في المنصات، ولإرسال رسائل تسويقية لك، وأنّ سياسة الخصوصية في منصات المشاهير تضبط عمليات الجمع والمعالجة والاستخدام والتحويل لمعلومات هويتك الشخصية، وتخضع قواعد سرية المعلومات لـ “سياسة الخصوصية والسرية الخاصة بمنصات المشاهير.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة السادسة عشر – إلغاء الصفحة الإلكترونية:</h6>
                            <p>
                                -  إن منصات المشاهير بحسب اتفاقية الاستخدام وبحسب القوانين والأنظمة المنصوصة بالمملكة العربية السعودية قد تلجأ إلى وقف مؤقت أو دائم للصفحة أو إلغاء صفحة المستخدم (تاجر /متابع) -المشهور أو تحديد قدراتهم على الوصول إلى خدمات منصات المشاهير، في حالة:
                                انتهاك قواعد وأحكام اتفاقية الاستخدام.
                                إذا لم يكن بإمكان منصات المشاهير توثيق أي من معلومات المستخدم المقدمة إليها.
                                عدم الدخول الى الموقع والصفحة الالكترونية خلال مدة أقصاها 12 شهر.
                                إذا قررت منصات المشاهير أنّ نشاطات المستخدم (تاجر /متابع) مخالفة للقانون أو أنّ نشاطات المستخدم (تاجر /متابع) قد تتسبب لمستخدمين آخرين أو المشاهير أو لمنصات المشاهير بمتاعب أو مخالفات قانونية.

                                -  قد تلجأ منصات المشاهير “بحسب تقييمها” إلى إعادة نشاط المستخدمين ( تاجر /متابع ) أو المشاهير الموقوفين، حيث أنّ المستخدم الذي أوقف نشاطه نهائياً أو أُلغيت ، قد لا يكون بإمكانه استخدام المنصات بأي طريقة كانت مهما كانت الظروف، لحين السماح له بإعادة نشاطه في منصات المشاهير من قبل إدارة منصات المشاهير ومع ذلك فإنّ المستخدم في حال انتهاكه لاتفاقية الاستخدام هذه فإنّ المنصات تحتفظ بحقها في استعادة أو المطالبة بأي مبالغ مستحقة للمنصات على المستخدم وأي خسائر أو أضرار تسبب بها المستخدم لمنصات المشاهير كما أنّ للمنصات الحق باتخاذ الإجراءات القانونية أو اللجوء إلى السلطات القضائية في المملكة العربية السعودية ضد المستخدم حسبما تراه منصات المشاهير مناسباً.
                                - يُقر كافة المستخدمين (تاجر /متابع) والمشاهير بعلمهم التام والنافي للجهالة بأنّ إدارة منصات المشاهير في تحويلها للأموال الخاصة بأنشطتهم التجارية داخل منصات المشاهير تخضع لسلطة وصلاحيات مؤسسة النقد بالمملكة العربية السعودية، ونتيجة لذلك فإنّ منصات المشاهير تُنوّه كافة المستخدمين (تاجر /متابع) والمشاهير بأنّها قدّ تتأخّر في تحويل بعض الأموال وذلك نتيجة لقيود مؤسسة النقد ووزارة التجارة والاستثمار وأنظمة التجارة الإلكترونية المفروضة على عمليات البيع والشراء الإلكترونية.

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة السابعة عشر – تغيير سياسة اتفاقية الاستخدام:
                            </h6>
                            <p>
                                قد تخضع سياسة اتفاقية الاستخدام هذه للتغيير من وقت لآخر، تم نشر النسخة الحالية من سياسة اتفاقية الاستخدام هذه على الانترنت من قبل منصات المشاهير. يتحتم على المستخدم (تاجر /متابع) – المشهور التحقق من سياسة اتفاقية الاستخدام الخاصة بالمنصات بشكل مستمر واستخدامك لمنصات المشاهير وتطبيقها الالكتروني وخدماتها يشمل موافقتك على سياسة اتفاقية الاستخدام حيث يتم تعديلها من وقت لآخر.
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الثامنة عشر-نظام الجرائم المعلوماتية السعودي:
                            </h6>
                            <p>
                                -  يلتزم المستخدمين( تاجر /متابع ) -المشاهير بعدم مخالفة أي من أحكام نظام الجرائم المعلوماتية السعودي، وفي حال مخالفتهم لأحكام نظام الجرائم المعلوماتية السعودي فإنّ هذا يخضع لمسئولتيهم المحضة ولإدارتهم، وليس هناك أي مسؤولية تقع على عاتق منصات المشاهير من جراء مخالفة الصفحة الالكترونية للأنظمة المنصوصة، حيث أنّ المستخدم ( تاجر /متابع ) والمشهور هو المسؤول عن صفحته الإلكترونية وعن تعامله مع المستخدمين ( تاجر /متابع ) مسؤولية كاملة، ولمنصات المشاهير دائماً الحق في اتخاذ ما تراه مناسباً عن أي صفحة إلكترونية أو تاجر او مشهور  يخالف أحكام نظام الجرائم المعلوماتية السعودي، سواءً عن طريق إبلاغ السلطات الرسمية أو الاكتفاء بإغلاق الصفحة الالكترونية لدى منصات المشاهير.
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة التاسعة عشر– التعويض:
                            </h6>
                            <p>
                                -  يوافق المستخدم (تاجر /متابع) -المشهور على تحمل المسئولية ووقاية منصات المشاهير أو منسوبيها أو مُلّاكها أو المتفرعين عنها من أي ضرر قد يقع على منصات المشاهير من جراء مخالفات التاجر (تاجر /متابع) -المشهور، كما يلتزم برفع أي ضرر أو منع أي ضرر قد يلحق بمنصات المشاهير أو بمنسوبيها أو بأحدهم من جراء مطالبات أو خسائر أو أعطال أو تكاليف، بما في ذلك أتعاب المحاماة، التي يتم تكبدها فيما يتعلق أو ناشئة او أي ادعاءات أو مطالبات أو أفعال أو نزاعات تنتج بسبب إساءة استخدام المستخدم
                                (تاجر /متابع) -المشهور أو نتج عن ذلك خرق لاتفاقية الاستخدام أو الأنظمة والقوانين المنصوصة بالمملكة العربية السعودية أو تعدي على حقوق أحد التجار -المشاهير أو شكوى من أحد المستخدمين (تاجر /متابع).

                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة العشرون – العلاقة والإشعارات بين منصات المشاهير والمستخدمين (تاجر /متابع):
                            </h6>
                            <p>
                                -  لا تتضمن أي من قواعد وأحكام اتفاقية الاستخدام هذه إشارة إلى وجود شراكة بين أي مستخدم ( تاجر /متابع ) أو مشهور  ومنصات المشاهير، ولا تسمح منصات المشاهير لأي مستخدم ( تاجر /متابع ) أو مشهور في أي حال من الأحوال بالإشارة المباشرة أو الغير مباشرة أو الإملاء إلى وجود علاقة أي كان نوعها سواء كانت مباشرة أو غير مباشرة بينه كمستخدمين ( تاجر /متابع ) أو مشاهير وبين منصات المشاهير أو إدارتها، وأنّ أي إشعارات يرغب المستخدم ( تاجر /متابع ) أو مشاهير في إرسالها إلى منصات المشاهير، عليه أن يقوم بإرسالها عبر البريد الإلكتروني وتقوم منصات المشاهير بالرد على الرسالة الإلكترونية. وأنت كمستخدم (تاجر /متابع) أو مشهور توافق على أن أي إشعارات ترسل إليك من منصات المشاهير سوف تُسلّم إليك بواسطة البريد الإلكتروني الذي قمت بتزويد منصات المشاهير به خلال عملية التسجيل.
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الواحد والعشرون – حل الخلافات:
                            </h6>
                            <p>
                                -  بموجب قواعد وأحكام اتفاقية الاستخدام هذه فإنّه في حال النزاع فيتم حل الخلاف عن طريق الصلح والمفاوضات أو التسوية الودية، وفي حال استمرار الخلاف فيتم حله عن طريق السلطات المختصة بالمملكة العربية السعودية.
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>المادة الثانية والعشرون – أحكام عامة:
                            </h6>
                            <p>
                                -  في حال إلغاء أي مادة واردة أو بند ورد في اتفاقية الاستخدام هذه أو أنّ هناك أي مادة واردة أو أي بند وارد في اتفاقية الاستخدام لم يعد نافذًا، فإنّ مثل هذا الأمر لا يلغي صلاحية باقي المواد والبنود والقواعد والأحكام الواردة في اتفاقية الاستخدام وتظل سارية حتى إشعار آخر من إدارة منصات المشاهير.
                                -  اتفاقية الاستخدام هذه سارية على كافة المستخدمين (تاجر /متابع) والمشاهير لمنصات المشاهير وهي المُنظّمة للعلاقة وهي العقد فيما بين التاجر-المشهور ومنصات المشاهير فقط لا غير، بغض النظر عن أي شكل نظامي أو كيان قانوني أو مؤسسي أو تجاري أو خيري يتخذه المستخدم (تاجر /متابع) أو المشهور.
                                أما فيما يخص العلاقة فيما بين المستخدمين (التاجر -المتابع) والمشهور فإنّه تخضع لعلاقة قانونية مستقلة ولها ضوابطها الخاصة الجارية فيما بينهم.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsBox;
