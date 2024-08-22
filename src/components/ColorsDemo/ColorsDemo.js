import './ColorsDemo.css';

export default function ColorsDemo() {
  return (
    <div className='demo'>
      <span className='d1'>--primary (color), --text</span>
      <span className='d2'>--secondary, --text-2</span>
      <span className='d3'>--accent, --text</span>
      <span className='d4'>--alt, --text-2</span>
    </div>
  );
}
