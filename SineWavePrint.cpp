#include <iostream>
#include <cmath>
using namespace std;
int main(){
    double frequency = 1.0;
    double samplingRate = 10.0;
    int sampleCount = 10;
    for(int n = 0; n < sampleCount; n++){
        double timeInSeconds = n / samplingRate;
        double valueOnYAxis = sin(2*M_PI*timeInSeconds*frequency);
        cout <<"Sample "<< n << " at time = " << timeInSeconds << "s:"<<valueOnYAxis<<endl;}

    return 0;
}
