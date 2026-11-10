// CUSTOM TYPE
type college = {
  isCumlaude: boolean;
  grade: string;
  organization?: string;
};

let telkomUniversity: college;
telkomUniversity = {
  isCumlaude: false,
  grade: "3.28",
};

function greetStudy(): string {
  return "Happy Study!";
}

const pomodoroTimer = (): string => {
  return "Pomodoro Timer is ON!";
};


