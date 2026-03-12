import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-2">
        <p>hello world</p>
        <div>
          <Button variant={'elevated'}>I am a button</Button>
        </div>
        <div>
          <Input placeholder="I'm an input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
      </div>
    </div>
  );
};
export default Home;
