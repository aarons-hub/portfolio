
















  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




style={{ transform: `translateY(${offsetY * 0.5}px)` }}



const { scrollYProgress } = useViewportScroll();
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});

const { scrollY } = useViewportScroll();

useViewportScroll();

function myScroll() {
  console.log("progress");
}

useEffect(() => {
  return scrollY.onChange((latest) => {
    console.log("Page scroll: ", latest);
    let number = latest;
    console.log(number);
  });
}, []);

const [scrollNum, setScrollNum] = useState(1000);

useEffect(() => {
  return scrollY.onChange((latest) => {
    setScrollNum(latest);
  });
}, []);



<motion.div className="progress" style={{ scaleX }}></motion.div>
<div className="test" style={{ width: `${scrollNum}px` }}>
  hello
</div>