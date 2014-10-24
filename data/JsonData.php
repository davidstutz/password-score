<?php
header('Content-Type: application/json; Charset=UTF-8');

/**
 * Used to generate json dictionaries or password lists.
 * 
 * @author David Stutz
 */
class JsonData {
    
    /**
     * Data directory.
     */
    protected $_input;
    
    /**
     * Constructor.
     * 
     * @param   string  input
     */
    public function __construct($input) {
        if (!is_dir($input)) {
            throw new Exception('Input directory does not exist.');
        }
        
        $this->_input = $input;
    }
    
    /**
     * Create json dictionary using the top k words.
     * 
     * @param   int     k
     * @param   string  locale
     * @param   string  ext
     */
    public function createJsonDictionary($k, $file, $ext = 'txt') {
        $handle = fopen($this->_input . DIRECTORY_SEPARATOR . $file . '.' . $ext, 'r');
        
        $array = array();
        
        if (FALSE === $handle) {
            throw new Exception('Could not read file.');
        }
        
        $rank = 1;
        while (FALSE !== ($buffer = fgets($handle, 4096))) {
            $buffer = trim($buffer);
            $parts = explode(' ', $buffer);

            if (sizeof($parts) < 1) {
                continue;
            }

            if (strlen($parts[0]) < 2) {
                continue;
            }
            
            $array[strtolower($parts[0])] = $rank;
            
            if ($rank > $k AND FALSE !== $k) {
                break;
            }
            
            $rank++;
        }
        
        fclose($handle);
        return json_encode($array, JSON_UNESCAPED_UNICODE);
    }
    
    /**
     * Create json country dictionary.
     * 
     * @param   int     rank
     * @param   string  locale
     * @param   string  ext
     */
    public function createJsonCountryDictionary($rank, $file, $ext = 'txt') {
        $handle = fopen($this->_input . DIRECTORY_SEPARATOR . $file . '.' . $ext, 'r');
        
        $array = array();
        
        if (FALSE === $handle) {
            throw new Exception('Could not read file.');
        }
        
        while (FALSE !== ($buffer = fgets($handle, 4096))) {
            $buffer = trim($buffer);
            $parts = explode(' ', $buffer);

            if (sizeof($parts) < 1) {
                continue;
            }

            if (strlen($parts[0]) < 2) {
                continue;
            }
            
            $array[strtolower($parts[0])] = $rank;
        }
        
        fclose($handle);
        return json_encode($array, JSON_UNESCAPED_UNICODE);
    }
    
    /**
	 * Parse CSV file. Will returned parsed CSV as array.
	 * 
	 * 
	 */
	public function createJSonFromCitiesCSV($file, $ext = 'txt', $delimiter = ',', $enclosure = '"')
	{
		$handle = fopen($this->_input . DIRECTORY_SEPARATOR . $file . '.' . $ext, "r");
		
		$array = array();
		if ($handle !== FALSE)
		{
			while (($tmp = fgetcsv($handle, 0, $delimiter, $enclosure)) !== FALSE)
			{
				if (!empty($tmp))
				{
                    $array[$tmp[1]] = $tmp[14];
				}
			}
		}
        
        // Sort by population.
        arsort($array);
        
        $rank = 1;
        foreach ($array as $city => &$pop) {
            $pop = $rank;
            $rank++;
        }
        
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
	}
    
    /**
     * Create a JSON list of passwords.
     * 
     * @param   string  locale
     * @param   string  ext
     */
    public function createPasswordList($file, $ext = 'txt') {
        $handle = fopen($this->_input . DIRECTORY_SEPARATOR . $file . '.' . $ext, 'r');
        
        $array = array();
        
        if (FALSE === $handle) {
            throw new Exception('Could not read file.');
        }
        
        while (FALSE !== ($buffer = fgets($handle, 4096))) {
            $buffer = trim($buffer);
            
            if (!empty($buffer)) {
                $array[] = $buffer;
            }
        }
        
        fclose($handle);
        return json_encode($array, JSON_UNESCAPED_UNICODE);
    }
}

$root = realpath(dirname(__FILE__));
$jsonData = new JsonData($root . DIRECTORY_SEPARATOR . 'dictionaries' . DIRECTORY_SEPARATOR . 'raw');
// Will result in log(rank) = 4 FOR ALL countries.
echo $jsonData->createJsonCountryDictionary(100000, 'countries-en', 'txt');