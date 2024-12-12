'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Volume2, Type, Languages } from 'lucide-react';

export function QuranSettings() {
  const [fontSize, setFontSize] = useState(20);
  const [showTranslation, setShowTranslation] = useState(true);
  const [selectedReciter, setSelectedReciter] = useState('');

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Settings</h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Type className="h-4 w-4" />
            Font Size
          </label>
          <Slider
            value={[fontSize]}
            onValueChange={([value]) => setFontSize(value)}
            min={16}
            max={32}
            step={1}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium flex items-center gap-2">
            <Languages className="h-4 w-4" />
            Show Translation
          </label>
          <Switch
            checked={showTranslation}
            onCheckedChange={setShowTranslation}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            Reciter
          </label>
          <Select value={selectedReciter} onValueChange={setSelectedReciter}>
            <SelectTrigger>
              <SelectValue placeholder="Select reciter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mishary">Mishary Rashid Alafasy</SelectItem>
              <SelectItem value="sudais">Abdul Rahman Al-Sudais</SelectItem>
              <SelectItem value="ghamdi">Saad Al-Ghamdi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}