#include <iostream>

using namespace std;

int main(){
  int in;
  cout << "Masukkan agka: ";
  cin >> in;
  for (int i = in; i > 0; i--){
    for (int j=i; j>0; j--) {
      cout << j << " ";
    }
    cout << endl;
  }
}
