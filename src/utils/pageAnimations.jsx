import { motion } from 'framer-motion';

// Loading screen animation variants (disabled)
export const loadingVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

// Page content animation variants
export const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Hero section animation variants
export const heroVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Title animation variants - NORMAL HOVER
export const titleVariants = {
  initial: { opacity: 1, y: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Subtitle animation variants
export const subtitleVariants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Section animation variants
export const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Column animation variants
export const columnVariants = {
  left: {
    initial: { x: -50, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  right: {
    initial: { x: 50, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
};

// Card animation variants - NORMAL HOVER EFFECTS
export const cardVariants = {
  initial: { opacity: 1, y: 0, scale: 1 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: index * 0.05,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Floating background elements animation
export const floatingVariants = {
  element1: {
    animate: {
      y: [0, -15, 0],
      scale: [1, 1.05, 1],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  element2: {
    animate: {
      y: [0, 15, 0],
      scale: [1, 0.95, 1],
    },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }
  }
};

// Loading spinner animation
export const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Progress bar animation
export const progressVariants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration: 0.1 }
};

// Create loading screen component
export const LoadingScreen = ({ isVisible, onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-lightBlue to-white z-50 flex items-center justify-center"
      variants={loadingVariants}
      initial="initial"
      animate={isVisible ? "initial" : "exit"}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="w-12 h-12 border-3 border-primary border-t-transparent rounded-full mx-auto mb-3"
          variants={spinnerVariants}
          animate="animate"
        />
        <motion.h2
          className="font-heading text-2xl font-bold text-primary mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Loading Content
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Preparing amazing content...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Create floating background elements
export const FloatingElements = () => {
  return (
    <>
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary opacity-5 rounded-full"
        variants={floatingVariants.element1}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-secondary opacity-5 rounded-full"
        variants={floatingVariants.element2}
        animate="animate"
      />
    </>
  );
};

// Create scroll progress indicator
export const ScrollProgress = ({ progressRef }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-30">
      <motion.div
        ref={progressRef}
        className="h-full bg-primary origin-left"
        variants={progressVariants}
        initial="initial"
        animate="animate"
        transition="transition"
      />
    </div>
  );
};
