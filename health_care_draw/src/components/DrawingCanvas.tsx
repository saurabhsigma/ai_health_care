import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CanvasDraw from 'react-canvas-draw';
import { Palette, Eraser, RotateCcw, Download } from 'lucide-react';
import clsx from 'clsx';

const DrawingCanvas = () => {
  const canvasRef = useRef<any>(null);
  const [brushColor, setBrushColor] = useState('#000000');
  const [brushRadius, setBrushRadius] = useState(3);

  const colors = [
    '#000000', '#e11d48', '#4f46e5', '#059669', 
    '#d97706', '#7c3aed', '#be123c', '#0891b2'
  ];

  const handleSave = () => {
    const dataUrl = canvasRef.current?.getDataURL();
    const link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Palette className="h-6 w-6 text-primary-500" />
            <h2 className="text-2xl font-bold text-gray-800">Relaxation Drawing</h2>
          </div>
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => canvasRef.current?.clear()}
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
              title="Clear canvas"
            >
              <RotateCcw className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
              title="Save drawing"
            >
              <Download className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex space-x-2">
              {colors.map((color) => (
                <motion.button
                  key={color}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setBrushColor(color)}
                  className={clsx(
                    "w-8 h-8 rounded-full shadow-sm",
                    brushColor === color ? "ring-2 ring-primary-500 ring-offset-2" : ""
                  )}
                  style={{ backgroundColor: color }}
                />
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => canvasRef.current?.eraseAll()}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                title="Eraser"
              >
                <Eraser className="h-4 w-4 text-gray-600" />
              </motion.button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Brush size:</span>
              <input
                type="range"
                min="1"
                max="20"
                value={brushRadius}
                onChange={(e) => setBrushRadius(parseInt(e.target.value))}
                className="w-32"
              />
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden bg-gray-50">
            <CanvasDraw
              ref={canvasRef}
              brushColor={brushColor}
              brushRadius={brushRadius}
              lazyRadius={0}
              canvasWidth={800}
              canvasHeight={400}
              hideGrid
              className="w-full touch-none"
            />
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            Express yourself freely. Drawing can help reduce stress and anxiety.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DrawingCanvas;