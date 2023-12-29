import { motion } from "framer-motion";

const Section = (props) => {
  const { children , mobileTop} = props;

  return (
    <motion.section
      className={`pt-10 flex
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          delay: 0.2,
        },
      }}
    >
      {children}
    </motion.section>
  );
};


const skills = [
  {
    title: "Machine Learning",
    level: 85,
  },
  {
    title: "Data Orchestration",
    level:75,
  },
  {
    title: "Data Visualization",
    level: 95,
  },
  {
    title: "Web Developement",
    level: 30,
  },
];



const languages = [
  {
    title: "Spanish",
    flag: "https://flagcdn.com/16x12/es.png",
    level: 100,
  },
  {
    title: "󠁧󠁢󠁥English",
    flag: "https://flagcdn.com/16x12/gb.png",
    level: 95,
  },
];



const SkillsBar = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <div className="flex flex-col md:flex-row">
          {/* Skills Column */}
          <div className="space-y-4 md:pl-20">
            {skills.map((skill, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="pl-4 text-lg md:text-xl font-bold"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Languages Column */}
          <div className="pt-4  space-y-4 md:pl-20">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="pl-4 text-lg md:text-xl font-bold"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.flag && (
                    <div className="flex items-center">
                      <img
                        src={lng.flag}
                        alt={`${lng.title} flag`}
                        className="mr-2"
                        style={{ width: '18px', height: 'auto' }}
                      />
                      {lng.title}
                    </div>
                  )}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};


export default SkillsBar